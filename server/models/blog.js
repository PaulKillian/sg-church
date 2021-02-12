const { Int32 } = require('bson');
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  hi: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('blog', blogSchema);
