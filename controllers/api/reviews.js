const Review = require('../../models/review')
const Pokemon = require('../../models/pokemon');

module.exports = {
  showAll,
  createReview,
  updateReview,
  deleteReview,
  showOne,
};

async function showAll(req, res) {
  try{
    const data = await Review.find({pokemon: req.params.id}).populate('user').exec()
    const math = {
      sum: 0,
      count: 0,
      mean: 1
    }
    data.forEach((one) => {
      math.sum =+ one.rating
      math.count ++
    })
      math.mean = math.sum / math.count
    res.status(200).json({mean: math.mean, reviews: data})
  }catch(error){
    res.status(400).json({message: error.message})
  }
}
async function createReview(req, res) {
  try {
    req.body.pokemon = await Pokemon.findOne({_id: req.params.id})
    req.body.user = req.user
    const review = new Review(req.body)
    await review.save()
    res.status(200).json(review)
  }catch(error){
    res.status(400).json({message: error.message})
  }
}
async function updateReview(req, res) {
  try{
    const review = await Review.findOneAndUpdate({user: req.user._id, pokemon: req.params.id}, req.body, { new: true })
    res.status(200).json(review)
  } catch(error){
    res.status(400).json({ message: error.message})
  }
}
async function deleteReview(req, res) {
  try{
    const review = await Review.findOneAndDelete({user: req.user._id, pokemon: req.params.id})
    res.status(200).json(review);
  }catch(error){
    res.status(400).json({message: error.message})
  } 
}
async function showOne(req, res) {
    try{
        const review = await Review.findOne({user: req.user._id, pokemon: req.params.id})
        res.status(200).json(review)
    } catch(error){
        res.status(400).json({message: error.message})
    }
}
