const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: false },
    precio: { type: Number, required: true },
  },
  {
    timestamps: true,
    collection: 'producto',
  }
);

const Producto = mongoose.model('producto', productoSchema);
module.exports = Producto;
