const sys = require('./sys')
const express = require('./express')
const expressSession = require('express-session')
const app = express.app
const passport = require('passport')

const MongoDBStore = require('connect-mongodb-session')(expressSession)

const LocalStrategy = require('passport-local').Strategy
const User = require(rootDir + '/lib/models/user')

var mongoStore = new MongoDBStore({
  uri: `mongodb://${sys.hostname}/${sys.databaseName}_sessions`,
  collection: 'userSessions'
})

app.use(
  expressSession({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
    cookie: {
      maxAge: (1000 * 60 * 60 * 24 * 7), // 1 week
      secure: false
    }
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
passport.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated())
        return next()
    res.status(404).render('index', { content: 404 })
}

module.exports = passport
