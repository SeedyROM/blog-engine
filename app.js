// set variables for environment
const express = require('express')
const logger = require('morgan')
const app = express()
const isDev = app.get('env') === 'development'
const expressNunjucks = require('express-nunjucks')
const path = require('path')
const port = 3000
const serveStaticHTML = false
const staticHTMLLocation = 'public/html'
const useTemplates = true
const templatesLocation = '/templates'

app.use(logger('dev'))
app.use('/js', express.static('public/js'))
app.use('/stylesheets', express.static('public/stylesheets'))
if(serveStaticHTML) app.use(express.static(staticHTMLLocation))
if(useTemplates) app.set('views', __dirname + templatesLocation)
const njk = expressNunjucks(app, { watch: isDev, noCache: isDev })

app.get('/', (req, res) => {
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
