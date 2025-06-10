const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  emailid: {
    type: String,
    required: true,
    unique: true,
  },
  mobileno: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: Date,
  },
  address: {
    type: String,
  },
  locationid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LocationMaster',
  }
});

module.exports = mongoose.model('User', userSchema);
