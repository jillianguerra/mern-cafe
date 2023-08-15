const express = require('express');
const router = express.Router();
const pokemonCtrl = require('../../controllers/api/pokemon');

// GET /api/pokemon
router.get('/', pokemonCtrl.index);
router.get('/type', pokemonCtrl.showTypes)
router.get('/type/:type', pokemonCtrl.showByType)
router.get('/:id', pokemonCtrl.show);

module.exports = router;