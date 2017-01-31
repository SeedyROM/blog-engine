const express = require(rootDir + '/config/express')
const passport = require(rootDir + '/config/passport')

express.app.get(
  '/be-admin',
  passport.isAuthenticated,
  (req, res) => {
    res.render(
      'admin/index',
      { user: req.user }
    )
  }
)
express.app.get(
  '/be-admin/post/new',
  passport.isAuthenticated,
  (req, res) => {
    res.render(
      'admin/blog/new_post',
      { user: req.user }
    )
  }
)
