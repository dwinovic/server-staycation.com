// Deklarasi Mongoose
const mongoose = require('mongoose');

// Membuat Shema
const imageShcema = new mongoose.Schema({
  imageUrl: {
    type: String,
    require: true,
  },
});

// Membuat Model dengan Module Exports
module.exports = mongoose.model('Image', imageShcema);
