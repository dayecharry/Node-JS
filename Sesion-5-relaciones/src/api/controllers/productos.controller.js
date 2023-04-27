const Producto = require('../models/productos.model');

const getProducto = async (req, res) => {
  try {
    const allProducts = await Producto.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const setProducto = async (req, res) => {
  try {
    const newproducto = new Producto(req.body);
    const createdProducto = await newproducto.save();
    return res.status(200).json(createdProducto);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getProducto, setProducto };
