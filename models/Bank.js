// Deklarasi Mongoose
const mongoose = require('mongoose');

// Membuat Shema
const bankSchema = new mongoose.Schema({
  nameBank: {
    type: String,
    require: true,
  },
  nomorRekening: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
});

// Membuat Model dengan Module Exports
module.exports = mongoose.model('Bank', bankSchema);
