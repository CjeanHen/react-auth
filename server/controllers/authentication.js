const User = require('../models/user')

exports.signup = function(req, res, next) {
  const email = req.body.email
  const password = req.body.password

  // see if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (existingUser) {
      
    }
  })
  // if email does exist return error

  // if email doesn't exist create and save user record

  // respond to request indicating that the user was created
}
