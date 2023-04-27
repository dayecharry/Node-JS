const mongoose = require('mongoose');
// obtengo el Schema de mongoose
const Schema = mongoose.Schema;
// Creo el Schema de la coleccion personas
const personasSchema = new Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: false },
    phone: { type: Number, required: false },
    city: { type: String, required: false },
    productos: [{ type: Schema.Types.ObjectId, ref: 'producto' }],
  },
  {
    collection: 'persona',
  }
);
//Crear el modelo de la coleccion basado en el Schema definido
const Persona = mongoose.model('persona', personasSchema);
module.exports = Persona;
