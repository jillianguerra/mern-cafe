const express = require('express')
const router = express.Router()
const pokemonCtrl = require('../../controllers/api/pokemon')
const reviewCtrl = require('../../controllers/api/reviews')

router.get('/', pokemonCtrl.index);
router.get('/type', pokemonCtrl.showTypes)
router.get('/type/:type', pokemonCtrl.showByType)
router.get('/:id', pokemonCtrl.show);

router.post('/:id/reviews', reviewCtrl.createReview)
router.put('/:id/reviews', reviewCtrl.updateReview)
router.delete('/:id/reviews', reviewCtrl.deleteReview)
router.get('/:id/reviews', reviewCtrl.showAll)
router.get('/:id/reviews/one', reviewCtrl.showOne)


module.exports = router;