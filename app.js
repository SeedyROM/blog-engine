// Load configuration files
require('./config/sys')
require('./config/mongoose')
require('./config/passport')

// Load routes
require('./lib/router')

// Import the express config and listen for incoming connections
const cli = require('./config/cli')
const express = require('./config/express')

// Process our command line arguments or listen connections...
if(cli.hasArguments()) {
  cli.processArguments()
} else {
  express.listen()
}
