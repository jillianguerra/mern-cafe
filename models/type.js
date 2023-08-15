const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./pokemon.js')

const typeSchema = new Schema({
  name: { type: String, required: true, unique: true},
  sortOrder: {type: Number, required: true, unique: true}
}, {
  timestamps: true
});

module.exports = mongoose.model('Type', typeSchema);