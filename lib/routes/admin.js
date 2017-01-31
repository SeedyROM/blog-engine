const express = require(rootDir + '/config/express')
const passport = require(rootDir + '/config/passport')

express.app.get(
  '/be-admin',
  passport.isAuthenticated,
  (req, res) => {
    res.render('admin/index', {username: req.user.username})
  }
)
