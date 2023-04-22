const mongoose = require('mongoose');
// obtengo el Schema de mongoose
const Schema = mongoose.Schema;
// Creo el Schema de la coleccion personas
const personasSchema = new Schema(
  {
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    email: { type: String, require: false },
    phone: { type: Number, require: false },
    city: { type: String, require: false },
  },
  {
    collection: 'persona',
  }
);
//Crear el modelo de la coleccion basado en el Schema definido
const Persona = mongoose.model('persona', personasSchema);
module.exports = Persona;
