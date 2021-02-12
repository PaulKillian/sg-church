const { Int32 } = require('bson');
const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('test', testSchema);
