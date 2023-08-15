require('dotenv').config();
require('./database');

const Type = require('../models/type');
const Pokemon = require('../models/pokemon');

(async function() {

  await Type.deleteMany({});
  const types = await Type.create([
    {name: 'normal', sortOrder: 10}, 
    {name: 'fire', sortOrder: 20},
    {name: 'water', sortOrder: 30}, 
    {name: 'grass', sortOrder: 40}, 
    {name: 'electric', sortOrder: 50},
    {name: 'ice', sortOrder: 60}, 
    {name: 'fighting', sortOrder: 70}, 
    {name: 'poison', sortOrder: 80}, 
    {name: 'ground', sortOrder: 90}, 
    {name: 'flying', sortOrder: 100}, 
    {name: 'psychic', sortOrder: 110}, 
    {name: 'bug', sortOrder: 120}, 
    {name: 'rock', sortOrder: 130}, 
    {name: 'ghost', sortOrder: 140}, 
    {name: 'dark', sortOrder: 150}, 
    {name: 'dragon', sortOrder: 160}, 
    {name: 'steel', sortOrder: 170}, 
    {name: 'fairy', sortOrder: 180}, 
  ]);

  await Pokemon.deleteMany({});
  const pokemons = await Pokemon.create([
    {name: 'Bulbasaur', img: 'https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/70px-0001Bulbasaur.png', type: types[3], type2: types[7], price: 100},
    {name: 'Charmander', img: 'https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/70px-0004Charmander.png', type: types[1], price: 100},
    {name: 'Squirtle', img: 'https://archives.bulbagarden.net/media/upload/thumb/5/54/0007Squirtle.png/70px-0007Squirtle.png', type: types[2], price: 100},
    {name: 'Caterpie', img: 'https://archives.bulbagarden.net/media/upload/thumb/5/5e/0010Caterpie.png/70px-0010Caterpie.png', type: types[11], price: 20},
    {name: 'Weedle', img: 'https://archives.bulbagarden.net/media/upload/thumb/3/36/0013Weedle.png/70px-0013Weedle.png', type: types[11], type2: types[7], price: 20},
    {name: 'Pidgey', img: 'https://archives.bulbagarden.net/media/upload/thumb/0/0c/0016Pidgey.png/70px-0016Pidgey.png', type: types[0], type2: types[9], price: 10},
    {name: 'Rattata', img: 'https://archives.bulbagarden.net/media/upload/thumb/a/aa/0019Rattata.png/70px-0019Rattata.png', type: types[0], price: 10},
    {name: 'Spearow', img: 'https://archives.bulbagarden.net/media/upload/thumb/2/2d/0021Spearow.png/70px-0021Spearow.png', type: types[0], type2: types[9], price: 20},
    {name: 'Ekans', img: 'https://archives.bulbagarden.net/media/upload/thumb/d/d2/0023Ekans.png/70px-0023Ekans.png', type: types[7], price: 80},
    {name: 'Pikachu', img: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/70px-0025Pikachu.png', type: types[4], price: 5000},
    {name: 'Sandshrew', img: 'https://archives.bulbagarden.net/media/upload/thumb/e/e9/0027Sandshrew.png/70px-0027Sandshrew.png', type: types[8], price: 70},
    {name: 'Nidoran-F', img: 'https://archives.bulbagarden.net/media/upload/thumb/b/b2/0029Nidoran.png/70px-0029Nidoran.png', type: types[7], price: 2000},
    {name: 'Nidoran-M', img: 'https://archives.bulbagarden.net/media/upload/thumb/8/8c/0032Nidoran.png/70px-0032Nidoran.png', type: types[7], price: 2000},
    {name: 'Clefairy', img: 'https://archives.bulbagarden.net/media/upload/thumb/b/b7/0035Clefairy.png/70px-0035Clefairy.png', type: types[17], price: 5000},
    {name: 'Vulpix', img: 'https://archives.bulbagarden.net/media/upload/thumb/0/06/0037Vulpix.png/70px-0037Vulpix.png', type: types[1], price: 5000},
    {name: 'Jigglypuff', img: 'https://archives.bulbagarden.net/media/upload/thumb/3/3a/0039Jigglypuff.png/70px-0039Jigglypuff.png', type: types[0], type2: types[17], price: 2000},
    {name: 'Zubat', img: 'https://archives.bulbagarden.net/media/upload/thumb/4/4c/0041Zubat.png/70px-0041Zubat.png', type: types[9], type2: types[7], price: 80},
    {name: 'Oddish', img: 'https://archives.bulbagarden.net/media/upload/thumb/1/16/0043Oddish.png/70px-0043Oddish.png', type: types[3], type2: types[7], price: 30},
    {name: 'Paras', img: 'https://archives.bulbagarden.net/media/upload/thumb/8/8a/0046Paras.png/70px-0046Paras.png', type: types[11], type2: types[3], price: 10},
    {name: 'Venonat', img: 'https://archives.bulbagarden.net/media/upload/thumb/2/2c/0048Venonat.png/70px-0048Venonat.png', type: types[11], type2: types[7], price: 5000},
    {name: 'Diglett', img: 'https://archives.bulbagarden.net/media/upload/thumb/a/a6/0050Diglett.png/70px-0050Diglett.png', type: types[8], price: 500},
    {name: 'Meowth', img: 'https://archives.bulbagarden.net/media/upload/thumb/d/d6/0052Meowth.png/70px-0052Meowth.png', type: types[0], price: 300},
    {name: 'Psyduck', img: 'https://archives.bulbagarden.net/media/upload/thumb/3/3f/0054Psyduck.png/70px-0054Psyduck.png', type: types[2], price: 100},
    {name: 'Mankey', img: 'https://archives.bulbagarden.net/media/upload/thumb/f/fa/0056Mankey.png/70px-0056Mankey.png', type: types[6], price: 2000},
    {name: 'Growlithe', img: 'https://archives.bulbagarden.net/media/upload/thumb/6/6a/0058Growlithe.png/70px-0058Growlithe.png', type: types[1], price: 2000},
    {name: 'Poliwag', img: 'https://archives.bulbagarden.net/media/upload/thumb/e/e4/0060Poliwag.png/70px-0060Poliwag.png', type: types[2], price: 10},
    {name: 'Abra', img: 'https://archives.bulbagarden.net/media/upload/thumb/b/bd/0063Abra.png/70px-0063Abra.png', type: types[10], price: 5000},
    {name: 'Bellsprout', img: 'https://archives.bulbagarden.net/media/upload/thumb/6/66/0069Bellsprout.png/70px-0069Bellsprout.png', type: types[3], type2: types[7], price: 20},
    {name: 'Tentacool', img: 'https://archives.bulbagarden.net/media/upload/thumb/6/6e/0072Tentacool.png/70px-0072Tentacool.png', type: types[2], type2: types[7], price: 50},
    {name: 'Geodude', img: 'https://archives.bulbagarden.net/media/upload/thumb/9/97/0074Geodude.png/70px-0074Geodude.png', type: types[12], type2: types[8], price: 50},
    {name: 'Ponyta', img: 'https://archives.bulbagarden.net/media/upload/thumb/c/c0/0077Ponyta.png/70px-0077Ponyta.png', type: types[1], price: 8000},
    {name: 'Slowpoke', img: 'https://archives.bulbagarden.net/media/upload/thumb/1/19/0079Slowpoke.png/70px-0079Slowpoke.png', type: types[2], type2: types[10], price: 2000},
    {name: 'Magnemite', img: 'https://archives.bulbagarden.net/media/upload/thumb/a/a2/0081Magnemite.png/70px-0081Magnemite.png', type: types[4], type2: types[16], price: 20},
    {name: `Farfetch'd`, img: 'https://archives.bulbagarden.net/media/upload/thumb/9/99/0083Farfetch%27d.png/70px-0083Farfetch%27d.png', type: types[0], type2: types[9], price: 150},
    {name: 'Doduo', img: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/0084Doduo.png/70px-0084Doduo.png', type: types[0], type2: types[9], price: 1000},
    {name: 'Seel', img: 'https://archives.bulbagarden.net/media/upload/thumb/2/22/0086Seel.png/70px-0086Seel.png', type: types[2], price: 4000},
    {name: 'Grimer', img: 'https://archives.bulbagarden.net/media/upload/thumb/e/eb/0088Grimer.png/70px-0088Grimer.png', type: types[7], price: 5},
    {name: 'Shellder', img: 'https://archives.bulbagarden.net/media/upload/thumb/3/3e/0090Shellder.png/70px-0090Shellder.png', type: types[2], price: 50},
    {name: 'Gastly', img: 'https://archives.bulbagarden.net/media/upload/thumb/c/c2/0092Gastly.png/70px-0092Gastly.png', type: types[13], type2: types[7], price: 10},
    {name: 'Onix', img: 'https://archives.bulbagarden.net/media/upload/thumb/b/b7/0095Onix.png/70px-0095Onix.png', type: types[12], type2: types[8], price: 7000},
    {name: 'Drowzee', img: 'https://archives.bulbagarden.net/media/upload/thumb/e/e4/0096Drowzee.png/70px-0096Drowzee.png', type: types[10], price: 500},
    {name: 'Krabby', img: 'https://archives.bulbagarden.net/media/upload/thumb/e/ed/0098Krabby.png/70px-0098Krabby.png', type: types[2], price: 20},
    {name: 'Exeggcute', img: 'https://archives.bulbagarden.net/media/upload/thumb/a/ae/0103Exeggutor.png/70px-0103Exeggutor.png', type: types[4], type2: types[10], price: 10},
    {name: 'Cubone', img: 'https://archives.bulbagarden.net/media/upload/thumb/1/19/0104Cubone.png/70px-0104Cubone.png', type: types[8], price: 500},
    {name: 'Hitmonlee', img: 'https://archives.bulbagarden.net/media/upload/thumb/0/00/0106Hitmonlee.png/70px-0106Hitmonlee.png', type: types[6], price: 5000},
    {name: 'Lickitung', img: 'https://archives.bulbagarden.net/media/upload/thumb/f/f2/0108Lickitung.png/70px-0108Lickitung.png', type: types[0], price: 300},
    {name: 'Koffing', img: 'https://archives.bulbagarden.net/media/upload/thumb/1/16/0109Koffing.png/70px-0109Koffing.png', type: types[7], price: 5},
    {name: 'Chansey', img: 'https://archives.bulbagarden.net/media/upload/thumb/c/c0/0113Chansey.png/70px-0113Chansey.png', type: types[0], price: 150},
    {name: 'Tangela', img: 'https://archives.bulbagarden.net/media/upload/thumb/2/22/0114Tangela.png/70px-0114Tangela.png', type: types[3], price: 30},
    {name: 'Horsea', img: 'https://archives.bulbagarden.net/media/upload/thumb/1/14/0116Horsea.png/70px-0116Horsea.png', type: types[2], price: 40},
    {name: 'Goldeen', img: 'https://archives.bulbagarden.net/media/upload/thumb/b/b6/0118Goldeen.png/70px-0118Goldeen.png', type: types[2], price: 20},
    {name: 'Staryu', img: 'https://archives.bulbagarden.net/media/upload/thumb/3/38/0120Staryu.png/70px-0120Staryu.png', type: types[2], price: 30},
    {name: 'Scyther', img: 'https://archives.bulbagarden.net/media/upload/thumb/8/81/0123Scyther.png/70px-0123Scyther.png', type: types[11], type2: types[9], price: 500},
    {name: 'Electabuzz', img: 'https://archives.bulbagarden.net/media/upload/thumb/5/5c/0125Electabuzz.png/70px-0125Electabuzz.png', type: types[4], price: 500},
    {name: 'Magmar', img: 'https://archives.bulbagarden.net/media/upload/thumb/7/72/0126Magmar.png/70px-0126Magmar.png', type: types[1], price: 500},
    {name: 'Pinsir', img: 'https://archives.bulbagarden.net/media/upload/thumb/a/a9/0127Pinsir.png/70px-0127Pinsir.png', type: types[11], price: 10},
    {name: 'Magikarp', img: 'https://archives.bulbagarden.net/media/upload/thumb/d/d1/0129Magikarp.png/70px-0129Magikarp.png', type: types[2], price: 5},
    {name: 'Lapras', img: 'https://archives.bulbagarden.net/media/upload/thumb/9/99/0131Lapras.png/70px-0131Lapras.png', type: types[2], type2: types[5], price: 5000},
    {name: 'Ditto', img: 'https://archives.bulbagarden.net/media/upload/thumb/2/25/0132Ditto.png/70px-0132Ditto.png', type: types[0], price: 50},
    {name: 'Eevee', img: 'https://archives.bulbagarden.net/media/upload/thumb/4/4c/0133Eevee.png/70px-0133Eevee.png', type: types[0], price: 2000},
    {name: 'Porygon', img: 'https://archives.bulbagarden.net/media/upload/thumb/8/8e/0137Porygon.png/70px-0137Porygon.png', type: types[0], price: 400},
    {name: 'Omanyte', img: 'https://archives.bulbagarden.net/media/upload/thumb/e/e6/0138Omanyte.png/70px-0138Omanyte.png', type: types[2], type2: types[12], price: 50},
    {name: 'Kabuto', img: 'https://archives.bulbagarden.net/media/upload/thumb/d/d2/0140Kabuto.png/70px-0140Kabuto.png', type: types[2], type2: types[12], price: 10},
    {name: 'Snorlax', img: 'https://archives.bulbagarden.net/media/upload/thumb/3/3f/0143Snorlax.png/70px-0143Snorlax.png', type: types[0], price: 3000},
  ]);

  // updates = await Type.find({})
  // pokemons.forEach((pokemon) => {
  //   pokemon.type.forEach((t) => {
  //    const update = updates.find((el) => el.name === t.name)
  //    update.pokemon ? update.pokemon.addToSet(pokemon) : update.pokemon = [pokemon]
  //   })
  // })
  // await updates.save()
  console.log(pokemons)
  process.exit();

})();