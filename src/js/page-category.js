// Page modules
var FastClick = require('fastclick')
var nav = require('./nav.js')
var urlParameter = require('./get-url-parameter')
var accordion = require('./accordion')
var socialShare = require('./social-share')

nav.init()
FastClick.attach(document.body)

// Load and process data
require.ensure(['./api', './get-api-data', './category-endpoint', './template-render', 'spin.js'], function (require) {
  var apiRoutes = require('./api')
  var getApiData = require('./get-api-data')
  var categoryEndpoint = require('./category-endpoint')
  var templating = require('./template-render')
  var Spinner = require('spin.js')

  // Spinner
  var spin = document.getElementById('spin')
  var loading = new Spinner().spin(spin)

  // Get category and create URL
  var theCategory = urlParameter.parameter('category')
  var theLocation = urlParameter.parameter('location')
  var categoryUrl = apiRoutes.categoryServiceProviders += theCategory

  buildList(categoryEndpoint.getEndpointUrl(categoryUrl, theLocation))

  function buildList (url) {
    // Get API data using promise
    getApiData.data(url).then(function (result) {
      // Append object name for Hogan
      var theData = { organisations: result }
      var template = ''
      var callback = function () {}

      if (result.subCategories.length) {
        template = 'js-category-result-tpl'
        callback = function () {
          accordion.init()
        }
      } else {
        template = 'js-category-no-results-result-tpl'
      }

      templating.renderTemplate(template, theData, 'js-category-result-output', callback)

      loading.stop()
      socialShare.init()
    })
  }
})
