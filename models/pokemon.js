const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
const Type = require('./type');


const pokemonSchema = require('./pokemonSchema');
// pokemonSchema.pre('save', async function(next) {
//     await this.populate('type')
//     const allTypes = await Type.find({})
//     console.log(allTypes)
//     allTypes.forEach((type) => {
//         if(type.name === this.type.name || type.name === this.type2.name) {
//             type.pokemon.addToSet(this)
//         }
//     })
//     await allTypes.save()
// })
module.exports = mongoose.model('Pokemon', pokemonSchema);