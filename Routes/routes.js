const express = require('express');

const router = express.Router();
const userController = require('../controllers/storeController');

router.get('/products', userController.getAll);
router.get('/products/:id', userController.getById);

module.exports = router;
