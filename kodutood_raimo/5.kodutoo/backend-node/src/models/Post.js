const { Schema, model } = require('mongoose');
//const User = require('./User');


const postSchema = new Schema({
  id: {type: Number, required: true},
  body: { type: String, required: true },
  textbody: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Post = model("Post", postSchema)

module.exports = Post