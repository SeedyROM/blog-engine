// Systemside config
const colors = require('colors')
const path = require('path')
const logger = require('morgan')

const hostname = 'localhost'
const databaseName = 'test'
const port = 3000
global.rootDir = process.cwd()

colors.setTheme({
  silly: 'rainbow', input: 'grey', verbose: 'cyan',
  prompt: 'grey', info: 'green', data: 'grey',
  help: 'cyan', warn: 'yellow', debug: 'blue', error: 'red'
})

module.exports = {
  colors: colors,
  path: path,
  logger: logger,
  hostname: hostname,
  databaseName: databaseName,
  port: port
}

// Gracefully handle exits
const exitHandler = (code) => {
  if(code != 0) console.log(`Server shut down with code: ${code}`.warn);
  else console.log(`Server shut down with code: ${code}`.info);
}
process.on('exit', exitHandler);
process.on('SIGINT', () => { console.log(''); process.exit(0) })
