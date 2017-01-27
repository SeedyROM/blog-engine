const express = require('./express')
const expressSession = require('express-session');
const app = express.app
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require(rootDir + '/models/user');

app.use(expressSession({
  secret: 'mySecretKey',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = passport;
