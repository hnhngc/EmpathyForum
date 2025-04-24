const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  like: { type: Number, default: 0 },
  dislike: { type: Number, default: 0 }
});

const commentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  like: { type: Number, default: 0 },
  dislike: { type: Number, default: 0 },
  replies: [replySchema]
});

module.exports = mongoose.model('Comment', commentSchema, 'comments');
