const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
// const authMiddleware = require('../middlewares/authMiddleware'); // To be implemented

router.get('/', productController.getProducts);
router.get('/:id', productController.getProductDetail);
router.post('/', productController.addProduct); // Add middleware here later

module.exports = router;
