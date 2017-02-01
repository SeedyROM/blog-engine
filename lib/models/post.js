const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  belongsTo: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: [true, 'Post needs a title!'],
    maxlength: [256, 'Title too long.'],
    minlength: [4, 'Title too short.']
  },
  postedAt: { type: Date, default: Date.now, required: true },
  lastEdited: Date,
  body: {
    type: String,
    required: [true, 'Post needs a body!'],
    minlength: [16, 'Post must be atleast longer than 16 characters.']
  },
  tags: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Tag'
  }],
});

module.exports = mongoose.model('Post', PostSchema)
