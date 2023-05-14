const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  createdDate: { type: Date, default: Date.now },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
