const Pokemon = require('../../models/pokemon');
const Type = require('../../models/type')

module.exports = {
  index,
  show
};

async function index(req, res) {
  try{
    const data = await Pokemon.find({}).sort('name').populate('type').exec()
    // const sortedPokemon = {}
    // pokemon.forEach((poke) => {
    //   poke.type.forEach((t)=> {
    //     typeName = t.name
    //     sortedPokemon.typeName ? sortedPokemon.typeName.push(poke) : sortedPokemon.typeName = [poke]
    //   })
    // })
    // res.status(200).json(sortedPokemon)
    data.sort((a, b) => a.type[0].sortOrder - b.type[0].sortOrder)
    res.status(200).json(data)

    // const items = await Pokemon.find({}).sort('name').populate('type').exec()
    // const types = await Type.find({}).sort('sortOrder')
    // // re-sort based upon the sortOrder of the categories
    // items.type.sort((a, b) => a.sortOrder - b.sortOrder);
    // items.sort((a, b) => a.type[0].sortOrder - b.type[0].sortOrder)
    // res.status(200).json(items);
  }catch(error){
    res.status(400).json({ msg: error.message });
  }
}

async function show(req, res) {
  try{
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}