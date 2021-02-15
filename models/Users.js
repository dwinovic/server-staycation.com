// Deklarasi Mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Membuat Shema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
});

// Membuat Model dengan Module Exports
module.exports = mongoose.model('Users', userSchema);
