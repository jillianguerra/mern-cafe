const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
require('./type');


const pokemonSchema = require('./pokemonSchema');
module.exports = mongoose.model('Pokemon', pokemonSchema);