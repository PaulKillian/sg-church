const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribedChannel: {
    type: String,
    required: true
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Test', testSchema);
