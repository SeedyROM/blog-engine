const express = require(rootDir + '/config/express')

require('./routes/auth')
require('./routes/admin')

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

// Default 404
express.app.use(function (req, res, next) {
  res.status(404).render('index', { content: '404' })
})
