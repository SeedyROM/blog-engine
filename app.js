// set variables for environment
const express = require('express')
const logger = require('morgan')
const colors = require('colors')
colors.setTheme({
  silly: 'rainbow', input: 'grey', verbose: 'cyan',
  prompt: 'grey', info: 'green', data: 'grey',
  help: 'cyan', warn: 'yellow', debug: 'blue', error: 'red'
})
const app = express()

const exitHandler = (code) => {
  if(code != 0) console.log(`Server shutting down with code: ${code}`.warn);
  else console.log(`Server shutting down with code: ${code}`.info);
}
process.on('exit', exitHandler);
process.on('SIGINT', () => { console.log(''); process.exit(0) })

const path = require('path')
const hostname = 'localhost'
const port = 3000

const serveStaticHTML = false
const staticHTMLLocation = 'public/html'
const useTemplates = true
const templatesLocation = '/templates'
const isDev = app.get('env') === 'development'
const expressNunjucks = require('express-nunjucks')

// setup mongodb connection
const mongoose = require('mongoose')
mongoose.connect(`mongodb://${hostname}/test`)
mongoose.connection.on('error', (error) => {
  console.log(colors.error(error))
  console.log('Error connecting to MongoDB!'.error)
  process.exit(1);
})
mongoose.connection.once('open', () => {
  console.log('Connected to mongodb...'.input)
})

// basic config
app.use(logger('dev'))
app.use('/js', express.static('public/js'))
app.use('/stylesheets', express.static('public/stylesheets'))
if(serveStaticHTML) app.use(express.static(staticHTMLLocation))
if(useTemplates) app.set('views', __dirname + templatesLocation)
expressNunjucks(app, { watch: isDev, noCache: isDev })

// default route
app.get('/', (req, res) => {
  res.render('index', {
    appName: (() => {
      var fs = require('fs')
      var json = JSON.parse(fs.readFileSync('package.json', 'utf8'))
      return json.name
    })()
  });
})

// start the server
app.listen(port, () => {
  console.log(`Server started at ${hostname}:${port}...`.info)
})
