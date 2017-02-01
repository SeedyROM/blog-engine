const mongoose = require('mongoose')

const TagSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A tag must have a name.'],
    unique: [true, 'Tag name already exists.']
  }
});

module.exports = mongoose.model('Tag', TagSchema)
