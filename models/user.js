const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: String
});

UserSchema.plugin(require('passport-local-mongoose'))

module.exports = mongoose.model('User', UserSchema)
