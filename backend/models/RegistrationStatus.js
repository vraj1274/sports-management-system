const mongoose = require('mongoose');

const registrationStatusSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: true
  },
  isOpen: {
    type: Boolean,
    default: false
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('RegistrationStatus', registrationStatusSchema); 