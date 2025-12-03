const express = require('express');
const router = express.Router();
const { getPlayerById, getPlayers, insertPlayer, deletePlayer, updatePlayer } = require('../controllers/product.controller');

router.post('/', insertPlayer);

router.get('/', getPlayers);
router.get('/:id', getPlayerById);

router.put('/:id', updatePlayer);

router.delete('/:id', deletePlayer);

module.exports = router;