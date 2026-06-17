const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.getAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

exports.getProductDetail = async (req, res) => {
  try {
    const product = await Product.getById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error: error.message });
  }
};

exports.addProduct = async (req, res) => {
  try {
    // Only sellers or admins should be able to add products (handled by middleware later)
    const productId = await Product.create({ ...req.body, seller_id: req.user.id });
    res.status(201).json({ message: 'Product added successfully', productId });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error: error.message });
  }
};
