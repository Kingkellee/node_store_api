const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name must be Provided'],
  },
  price: {
    type: Number,
    require: [true, 'Product price must be Povided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported',
    },
  },
});

module.exports = mongoose.model('Product', productSchema);
