// Load configuration files
require('./config/sys')
require('./config/mongoose')
require('./config/defaultRoutes')
require('./config/passport')

// Import the express config and listen for incoming connections
const express = require('./config/express')

express.listen()
