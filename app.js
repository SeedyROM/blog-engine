// set variables for environment
const express = require('express')
const logger = require('morgan')
const app = express()
const isDev = app.get('env') === 'development'
const expressNunjucks = require('express-nunjucks')
const path = require('path')
const port = 3000

// Displays server log in the CLI
app.use(logger('dev'))

// instruct express to server up static assets
app.use(express.static('public'))
app.set('views', __dirname + '/templates')

const njk = expressNunjucks(app, {
    watch: isDev,
    noCache: isDev
})

app.get('/home', (req, res) => {
  res.render('index', {
    appName: (() => {
      var fs = require('fs')
      var json = JSON.parse(fs.readFileSync('package.json', 'utf8'))
      return json.name
    })()
  });
})

// Set server port
app.listen(port)

console.log("Server is running at => http://localhost:" + port + "/\nCTRL + C to shutdown")
