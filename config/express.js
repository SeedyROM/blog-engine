// Express config
const sys = require('./sys')
const express = require('express')
const expressNunjucks = require('express-nunjucks')
const app = express()
app.use(sys.logger('dev'))
app.use(require('body-parser').urlencoded({ extended: true }))

// Static server and template config
const serveStaticHTML = false
const staticHTMLLocation = 'public/html'
const useTemplates = true
const templatesLocation = 'templates'
const isDev = app.get('env') === 'development'

// Content locations
app.use('/js', express.static('public/js'))
app.use('/stylesheets', express.static('public/stylesheets'))
app.use('/favicon.ico', express.static('public/favicon.ico'))
if(serveStaticHTML) app.use(express.static(staticHTMLLocation))
if(useTemplates) app.set('views', rootDir +'/'+ templatesLocation)
expressNunjucks(app, { watch: isDev, noCache: isDev })

// Listen shortcut
const listen = () => {
  app.listen(sys.port, () => {
    console.log(`Server started at ${sys.hostname}:${sys.port}...`.info)
  })
}

module.exports = {
  app : app,
  serveStaticHTML: serveStaticHTML,
  staticHTMLLocation: staticHTMLLocation,
  useTemplates: useTemplates,
  templatesLocation: templatesLocation,
  isDev: isDev,
  listen: listen
}
