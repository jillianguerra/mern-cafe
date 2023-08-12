const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
require('./type');

const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);