const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
  {
    name: { type: String, required: true },
    planet: { type: String, required: true },
    image: { type: String, required: false, default: '' },
    image2: { type: String, required: false, default: '' },
    ki: { type: Number, required: false },
  },
  {
    collection: 'character',
  }
);
const Character = mongoose.model('character', CharacterSchema);
module.exports = Character;
