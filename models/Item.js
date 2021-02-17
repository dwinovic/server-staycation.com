// Deklarasi Mongoose
const mongoose = require('mongoose');
// Untuk relationship
const { ObjectId } = mongoose.Schema;

// Membuat Shema
const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    default: 'Indonesia',
  },
  city: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    default: 'night',
  },
  sumBooking: {
    type: Number,
    default: 0,
  },
  imageId: [
    {
      type: ObjectId,
      ref: 'Image',
    },
  ],
  categoryId: {
    type: ObjectId,
    ref: 'Category',
  },
  featureId: [
    {
      type: ObjectId,
      ref: 'Feature',
    },
  ],
  activityId: [
    {
      type: ObjectId,
      ref: 'Activity',
    },
  ],
});

// Membuat Model dengan Module Exports
module.exports = mongoose.model('Item', itemSchema);
