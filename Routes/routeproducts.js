const express = require('express');

const validateJoi = require('../middlewares/validateJoi');
// const isName = require('../middlewares/isNameValid');

const router = express.Router();
const userController = require('../controllers/storeController');

router.get('/products', userController.getAll);
router.get('/products/:id', userController.getById);
router.post('/products', validateJoi, userController.getPost);
router.delete('/products/:id', userController.remove);

module.exports = router;
