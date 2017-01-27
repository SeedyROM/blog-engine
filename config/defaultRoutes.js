const express = require('./express')
const passport = require('./passport')
const User = require(rootDir + '/models/user')

// Default index
express.app.get('/', (req, res) => {
  res.render('index', {
    appName: (() => {
      var fs = require('fs')
      var json = JSON.parse(fs.readFileSync('package.json', 'utf8'))
      return json.name
    })(),
    user: req.user,
  })
})

// Default passport routes
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

// Default 404
express.app.use(function (req, res, next) {
  res.status(404).render('index', { content: '404' })
})
