// Deklarasi Mongoose
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

// Membuat Shema
const featureSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  qty: {
    type: Number,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  itemId: {
    type: ObjectId,
    ref: 'Item',
  },
});

// Membuat Model dengan Module Exports
module.exports = mongoose.model('Feature', featureSchema);
