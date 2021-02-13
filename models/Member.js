// Deklarasi Mongoose
const mongoose = require('mongoose');

// Membuat Shema
const memberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
});

// Membuat Model dengan Module Exports
module.exports = mongoose.model('Member', memberSchema);
