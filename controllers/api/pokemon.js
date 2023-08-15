const Pokemon = require('../../models/pokemon');
const Type = require('../../models/type')

module.exports = {
  index,
  showTypes,
  showByType,
  show
};

async function index(req, res) {
  try{
    const data = await Pokemon.find({}).sort('name').populate('type', 'type2').exec()
    res.status(200).json({pokemon: data})
  }catch(error){
    res.status(400).json({message: error.message})
  }
}
async function showTypes(req, res) {
  try {
    const types = await Type.find({})
    res.status(200).json({types: types})
  }catch(error){
    res.status(400).json({message: error.message})
  }
}
async function showByType(req, res) {
  try{
    const type = await Type.findOne({name: req.params.type})
    const data = await Pokemon.find({type: type._id}).populate('type', 'type2').exec()
    const data2 = await Pokemon.find({type2: type._id}).populate('type', 'type2').exec()
    const pokemons = [...data, ...data2].sort((a, b) => a.name - b.name)
    res.status(200).json(pokemons)
  } catch(error){
    res.status(400).json({ message: error.message})
  }
}
async function show(req, res) {
  try{
    const pokemon = await Pokemon.findById(req.params.id);
    res.status(200).json(pokemon);
  }catch(error){
    res.status(400).json({message: error.message})
  } 
}
