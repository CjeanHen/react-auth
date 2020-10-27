const Authentication = require('./controllers/authentication')

module.exports = function(app) {
  app.post('/sign-up', Authentication.signup)
}
