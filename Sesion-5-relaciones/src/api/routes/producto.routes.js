const express = require('express');

const router = express.Router();

const {
  getProducto,
  setProducto,
} = require('../controllers/productos.controller');

router.post('/', setProducto);
router.get('/', getProducto);

module.exports = router;
