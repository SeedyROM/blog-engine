const express = require('./express')
express.app.get('/', (req, res) => {
  res.render('index', {
    appName: (() => {
      var fs = require('fs')
      var json = JSON.parse(fs.readFileSync('package.json', 'utf8'))
      return json.name
    })()
  })
})
express.app.use(function (req, res, next) {
  res.status(404).render('index', { content: '404' })
})
