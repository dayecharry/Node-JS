const express = require('express');
const router = express.Router();

const {
  getAllPersonas,
  setNewPersona,
  updatePersona,
  deletePersona,
  filterByCity,
  filterByNameOrder,
} = require('../controllers/personas.controller');

router.get('/', getAllPersonas);

//añadir una nueva persona
router.post('/', setNewPersona);

//Modifica una persona que ya exista
router.put('/:id', updatePersona);

//Elimina a una persona
router.delete('/:id', deletePersona);

//Filtrar por ciudad, haciendo uso de los query params
router.get('/city', filterByCity);

//filter por nombre y ordenar por email
router.get('/filtername', filterByNameOrder);

module.exports = router;
