const mongoose = require('mongoose');
const config = require('../config/database');

// Contact form data schema
const FormMsgSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

// Pour rendre UserSchema utilisable ailleurs
const FormMsg = module.exports = mongoose.model('FormMsg', FormMsgSchema);