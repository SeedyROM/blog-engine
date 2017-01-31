// Load configuration files
require('./config/sys')
require('./config/mongoose')
require('./config/passport')

// Load routes
require('./lib/router')

// Import the express config
const express = require('./config/express')

// Listen...
express.listen()
