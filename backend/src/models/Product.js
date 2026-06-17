const db = require('../config/db');

class Product {
  static async getAll() {
    const [rows] = await db.execute('SELECT * FROM products');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.execute('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(productData) {
    const { name, brand, price, unit_price, image_url, category, seller_id, stock } = productData;
    const [result] = await db.execute(
      'INSERT INTO products (name, brand, price, unit_price, image_url, category, seller_id, stock) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [name, brand, price, unit_price, image_url, category, seller_id, stock]
    );
    return result.insertId;
  }
}

module.exports = Product;
