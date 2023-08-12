const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose
const Type = require('./type');


const pokemonSchema = require('./pokemonSchema');
// pokemonSchema.pre('save', async function(next) {
//     await this.populate('type')
//     const allTypes = await Type.find({})
//     console.log(allTypes)
//     allTypes.forEach((type) => {
//         if(type.name === this.type[0].name || this.type[1].name) {
//             type.pokemon.addToSet(this)
//         }
//     })
//     await allTypes.save()
// })
module.exports = mongoose.model('Pokemon', pokemonSchema);