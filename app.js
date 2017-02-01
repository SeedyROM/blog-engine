// Load configuration files
require('./config/sys')
require('./config/mongoose')
require('./config/passport')
const Post = require('./lib/models/post.js')
const Tag = require('./lib/models/tag.js')

// Load routes
require('./lib/router')

// Import the express config
const express = require('./config/express')

// Listen...
express.listen()
