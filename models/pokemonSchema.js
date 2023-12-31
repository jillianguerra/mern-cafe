const pokemon = require('./pokemon');

const Schema = require('mongoose').Schema;

const pokemonSchema = new Schema({
  name: { type: String, required: true, unique: true},
  img: String,
  type: { type: Schema.Types.ObjectId, ref: 'Type' },
  type2: { type: Schema.Types.ObjectId, ref: 'Type' },
  price: { type: Number, required: true, default: 0 },
  dex: String
}, {
  timestamps: true
});

module.exports = pokemonSchema;