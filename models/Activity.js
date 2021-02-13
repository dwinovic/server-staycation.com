// Deklarasi Mongoose
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

// Membuat Shema
const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  isPopuler: {
    type: Boolean,
  },
  itemId: {
    type: ObjectId,
    ref: 'Item',
  },
});

// Membuat Model dengan Module Exports
module.exports = mongoose.model('Activity', activitySchema);
