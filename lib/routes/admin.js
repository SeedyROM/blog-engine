const express = require(rootDir + '/config/express')
const passport = require(rootDir + '/config/passport')

const errorHandler = require('mongoose-error-handler')
var Post = require(rootDir + '/lib/models/post')
var Tag = require(rootDir + '/lib/models/tag')

var adminRoot = '/be-admin';

// Index for the admin panel
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

//
// Post list, create and edit view
//
var postsUrl = adminRoot + '/posts'
express.app.get(
  postsUrl,
  passport.isAuthenticated,
  (req, res) => {
    var postQuery = Post.find()
    .sort({postedAt: 'desc'})
    .limit(30)
    .exec((error, posts) => {
      res.render(
        'admin/blog/posts',
        {
          user: req.user,
          posts: posts,
        }
      )
    })
  }
)
// Get post by slug
express.app.get(
  postsUrl + '/view/:slug',
  passport.isAuthenticated,
  (req, res) => {
    var postQuery = Post
    .find({slug: req.params.slug})
    .exec((error, post) => {
      res.json({ post })
    })
  }
)
// New post
express.app.get(
  postsUrl + '/new',
  passport.isAuthenticated,
  (req, res) => {
    res.render(
      'admin/blog/new_post',
      { user: req.user }
    )
  }
)
express.app.post(
  postsUrl + '/new',
  passport.isAuthenticated,
  (req, res, next) => {
    var post = new Post({
      title: req.body.title,
      belongsTo: req.user.id,
      body: req.body.body,
      tags: req.body.tags,
    })
    post.save((error) => {
      if(error) next(error)
      else res.redirect(postsUrl)
    })
  }
)
