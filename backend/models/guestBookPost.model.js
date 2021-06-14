const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const guestBookPostSchema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
}, {
  timestamps: true,
});

const guestBookPost = mongoose.model('guestBookPost', guestBookPostSchema);

module.exports = guestBookPost;