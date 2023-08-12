const express = require('express');
const router = express.Router();
const pokemonCtrl = require('../../controllers/api/pokemon');

// GET /api/items
router.get('/', pokemonCtrl.index);
// GET /api/items/:id
router.get('/:id', pokemonCtrl.show);

module.exports = router;