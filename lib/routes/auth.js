const express = require(rootDir + '/config/express')
const passport = require(rootDir + '/config/passport')
const User = require(rootDir + '/lib/models/user')

express.app.get('/login',
  (req, res) => {
    res.render('auth/login')
  }
)
express.app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/')
  }
)
express.app.get('/logout',
  (req, res) => {
    req.logout()
    res.redirect('/')
  }
)
