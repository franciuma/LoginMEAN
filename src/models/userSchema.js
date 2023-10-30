const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: 'String',
  password: 'String',
  role: {
    type: 'String',
    default: 'defaultUser'
  }
})

module.exports = mongoose.model('User', userSchema)
