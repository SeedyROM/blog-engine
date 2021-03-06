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
  slug: String,
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

function titleToSlug(title) {
  return title.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-')
}

PostSchema.pre('save', function (next) {
  this.slug = titleToSlug(this.title)
  next()
})
//
// Optional!
//
// PostSchema.pre('update', function (next) {
//   var update = this._update;
//   if (update.$set && update.$set.title) {
//     this.update({}, { slug: titleToSlug(update.$set.title) })
//   }
//   next();
// })

module.exports = mongoose.model('Post', PostSchema)
