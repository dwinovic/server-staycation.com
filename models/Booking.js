// Deklarasi Mongoose
const mongoose = require('mongoose');
// Untuk relationship
const { ObjectId } = mongoose.Schema;

// Membuat Shema
const bookingSchema = new mongoose.Schema({
  bookingStartDate: {
    type: Date,
    required: true,
  },
  bookingEndDate: {
    type: Date,
    required: true,
  },
  itemId: [
    {
      _id: {
        type: ObjectId,
        ref: 'Item',
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      night: {
        type: Number,
        required: true,
      },
    },
  ],
  memberdId: {
    type: ObjectId,
    ref: 'Member',
  },
  bankId: {
    type: ObjectId,
    ref: 'BankId',
  },
  proofPayment: {
    type: String,
    required: true,
  },
  bankFrom: {
    type: String,
    required: true,
  },
  accountHolder: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

// Membuat Model dengan Module Exports
module.exports = mongoose.model('Booking', bookingSchema);
