// Express config
const express = require('express')
const expressNunjucks = require('express-nunjucks')
const app = express()
const sys = require('./sys')

// Static server and template config
const serveStaticHTML = false
const staticHTMLLocation = 'public/html'
const useTemplates = true
const templatesLocation = 'templates'
const isDev = app.get('env') === 'development'

app.use(sys.logger('dev'))
app.use('/js', express.static('public/js'))
app.use('/stylesheets', express.static('public/stylesheets'))
if(serveStaticHTML) app.use(express.static(staticHTMLLocation))
if(useTemplates) app.set('views', process.cwd() +'/'+ templatesLocation)
expressNunjucks(app, { watch: isDev, noCache: isDev })

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
