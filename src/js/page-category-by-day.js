// Page modules
var FastClick = require('fastclick')
var nav = require('./nav.js') // eslint-disable-line
var urlParameter = require('./get-url-parameter')

// Lodash
var forEach = require('lodash/collection/forEach')
var find = require('lodash/collection/find')
var sortBy = require('lodash/collection/sortBy')

// FastClick
FastClick.attach(document.body)

// Load and process data
require.ensure(['./api', './get-api-data', './get-location', 'hogan.js', 'spin.js'], function (require) {
  var apiRoutes = require('./api')
  var getApiData = require('./get-api-data')
  var Hogan = require('hogan.js')
  var getLocation = require('./get-location')
  var Spinner = require('spin.js')

  // Spinner
  var spin = document.getElementById('spin')
  var loading = new Spinner().spin(spin)

  // Get category and create URL
  var theCategory = urlParameter.parameter('category')
  var categoryUrl = apiRoutes.categoryServiceProvidersByDay += theCategory

  // If we have geolocation support, run the geolocation promise and modify the url with lat lng,
  // Or if promise fails just run build function,
  // Or if geolocation isn't supported just run the build function.
  if (navigator.geolocation) {
    getLocation.location().then(function (position) {
      var latitude = position.coords.latitude
      var longitude = position.coords.longitude
      var locationUrl = categoryUrl += '/long/' + longitude + '/lat/' + latitude

      buildList(locationUrl)
    }).fail(function (error) {
      console.error('GEOLOCATION ERROR: ' + error)
      buildList(categoryUrl)
    })
  } else {
    buildList(categoryUrl)
  }

  function buildList (url) {
    // Get API data using promise
    getApiData.data(url).then(function (result) {
      forEach(result.daysServices, function(day) {
        day.serviceProviders = sortBy(day.serviceProviders, function(provider) {
          return provider.openingTimes.startTime
        })
      })

      // Append object name for Hogan
      var theData = { organisations: result }

      // Compile and render template
      var theTemplate = document.getElementById('js-category-result-tpl').innerHTML
      var compileTemplate = Hogan.compile(theTemplate)
      var theOutput = compileTemplate.render(theData)

      document.getElementById('js-category-result-output').innerHTML = theOutput

      loading.stop()
    })
  }
})