const express = require(rootDir + '/config/express')
const passport = require(rootDir + '/config/passport')

var Post = require(rootDir + '/lib/models/post')

var adminRoot = '/be-admin';

express.app.get(
  adminRoot,
  passport.isAuthenticated,
  (req, res) => {
    res.render(
      'admin/index',
      { user: req.user }
    )
  }
)
express.app.get(
  adminRoot + '/posts/new',
  passport.isAuthenticated,
  (req, res) => {
    res.render(
      'admin/blog/new_post',
      { user: req.user }
    )
  }
)
express.app.get(
  (adminRoot + '/posts'),
  passport.isAuthenticated,
  (req, res) => {
    var postQuery = Post.find().limit(30).exec((error, posts) => {
      res.render(
        'admin/blog/posts',
        {
          user: req.user,
          posts: posts,
        }
      )
    });
  }
)
