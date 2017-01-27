// Load configuration files
require('./config/sys')
require('./config/mongoose')
require('./config/defaultRoutes')

// Import our the express config and listen for incoming connections
const express = require('./config/express')
express.listen()
