var needs = [
  { 'need': 'Help fill in referral forms', 'type': 'time', 'trainingRequired': 'yes',  'skillsRequired': '', 'notes': 'Need training?', 'who': '', 'link': 'http://' },
  { 'need': 'Staff/client training/supervision', 'type': 'time', 'trainingRequired': 'yes',  'skillsRequired': '', 'notes': 'Need training?', 'who': '', 'link': 'http://' },
  { 'need': 'Money mentoring/financial literacy', 'type': 'time + skills', 'trainingRequired': '?',  'skillsRequired': '', 'notes': 'Need training?', 'who': '', 'link': 'http://' },
  { 'need': 'Interview skills/job seeking for clients', 'type': 'time + skills', 'trainingRequired': '',  'skillsRequired': '', 'notes': 'Need training?', 'who': '', 'link': 'http://' },
  { 'need': 'IT', 'type': 'time + things', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': '', 'link': 'http://' },
  { 'need': 'Laundry', 'type': 'time + things', 'trainingRequired': '',  'skillsRequired': '', 'notes': 'Or can use equiptment?', 'who': '', 'link': 'http://' },
  { 'need': 'Law firms- legacies', 'type': 'time + skills', 'trainingRequired': '',  'skillsRequired': 'Legal', 'notes': '', 'who': '', 'link': 'http://' },
  { 'need': 'Maintenance/repair, cleaning', 'type': 'time', 'trainingRequired': '',  'skillsRequired': 'DIY?', 'notes': '', 'who': '', 'link': 'http://' },
  { 'need': 'Driver (drop off/collection) ', 'type': 'time + things', 'trainingRequired': '',  'skillsRequired': 'Driver', 'notes': '', 'who': '', 'link': 'http://' },
  { 'need': 'Trustees/volunteers', 'type': 'time', 'trainingRequired': '',  'skillsRequired': '', 'notes': 'Need training?', 'who': '', 'link': 'http://' },
  { 'need': 'Fundraising (dress down days etc) ', 'type': 'money', 'trainingRequired': '',  'skillsRequired': '', 'notes': 'Suggestions for how relevant??', 'who': '', 'link': 'http://' },
  { 'need': 'Printing', 'type': 'time + things', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': '', 'link': 'http://' },
  { 'need': 'Coffee, tea, sugar', 'type': 'things', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Booth Centre', 'link': 'http://' },
  { 'need': 'Fresh bread (15 loaves) by 8:30am daily', 'type': 'things', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Booth Centre', 'link': 'http://' },
  { 'need': '30 litres of milk daily between 8am and 4pm', 'type': 'things', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Booth Centre', 'link': 'http://' },
  { 'need': 'Eggs, bacon, sausage as a one off or on a regular basis', 'type': 'things', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Booth Centre', 'link': 'http://' },
  { 'need': 'Cleaning products - floor cleaner, anti-bacterial spray, kitchen cleaner, cloths, and blue roll/toilet roll', 'type': 'things', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Booth Centre', 'link': 'http://' },
  { 'need': 'Stationery - printing paper, pads, pens, post-its', 'type': 'things', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Booth Centre', 'link': 'http://' },
  { 'need': 'Deep clean the building once every 6 months', 'type': 'time + things', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Booth Centre', 'link': 'http://' },
  { 'need': 'Building maintenance', 'type': 'time + things', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Booth Centre', 'link': 'http://' },
  { 'need': 'Frames for the art work that homeless people produce', 'type': 'things', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Booth Centre', 'link': 'http://' },
  { 'need': 'Mobile phones for those looking for work', 'type': 'things', 'trainingRequired': '',  'skillsRequired': '', 'notes': 'Any phones? Pay for contracts?', 'who': 'Booth Centre', 'link': 'http://' },
  { 'need': 'Wood for our woodwork classes', 'type': 'things', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Booth Centre', 'link': 'http://' },
  { 'need': 'Art materials for our art class', 'type': 'things', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Booth Centre', 'link': 'http://' },
  { 'need': 'Material for our sewing classes', 'type': 'things', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Booth Centre', 'link': 'http://' },
  { 'need': 'Service sewing machines', 'type': 'time + skills', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Booth Centre', 'link': 'http://' },
  { 'need': 'Vouchers to buy clothes/shoes for job interviews', 'type': 'money / things', 'trainingRequired': '',  'skillsRequired': '', 'notes': 'Could go shopping with someone?', 'who': 'Booth Centre', 'link': 'http://' },
  { 'need': 'Deposit for someone\'s rent', 'type': 'money', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Big Change Mcr', 'link': 'http://' },
  { 'need': 'Help educate re debunking myths of homeless', 'type': 'time + skills', 'trainingRequired': '',  'skillsRequired': '', 'notes': 'Writers, creative, video', 'who': 'Workshop', 'link': 'http://' },
  { 'need': 'Tell stories of homeless people', 'type': 'time + skills', 'trainingRequired': '',  'skillsRequired': '', 'notes': 'Writers', 'who': 'Workshop', 'link': 'http://' },
  { 'need': 'Pay for someone to become/be a drugs/alcohol support worker', 'type': 'money', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'The Wellspring', 'link': 'http://' },
  { 'need': 'Central drop off point', 'type': '?', 'trainingRequired': '',  'skillsRequired': '', 'notes': 'Use someone\'s space', 'who': 'Workshop', 'link': 'http://' },
  { 'need': 'Help with PR/Marketing/social media', 'type': 'time + things?', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Workshop', 'link': 'http://' },
  { 'need': 'Debriefing and counselling for volunteers', 'type': 'time + skills', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Workshop', 'link': 'http://' },
  { 'need': 'Help with planning and admin', 'type': 'time + skills', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Workshop', 'link': 'http://' },
  { 'need': 'Help create newsletters for different groups e.g. churches', 'type': 'time + skills', 'trainingRequired': '',  'skillsRequired': '', 'notes': 'Working groups? Social', 'who': 'Workshop', 'link': 'http://' },
  { 'need': 'Go to talk to different groups about homelessness e.g. unis', 'type': 'time + knowledge', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Workshop', 'link': 'http://' },
  { 'need': 'People to listen / befriend', 'type': '', 'trainingRequired': '',  'skillsRequired': '', 'notes': 'Text service - be a listening ear', 'who': 'Workshop', 'link': 'http://' },
  { 'need': 'Create and distibute offline material e.g. flyers', 'type': '', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'Workshop', 'link': 'http://' },
  { 'need': 'Feet warmers', 'type': 'things', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'coffee 4 craig', 'link': 'http://' },
  { 'need': 'Food containers', 'type': 'things', 'trainingRequired': '',  'skillsRequired': '', 'notes': '', 'who': 'mad dogs street project', 'link': 'http://' }
]

module.exports = {
  'needs': needs
}
