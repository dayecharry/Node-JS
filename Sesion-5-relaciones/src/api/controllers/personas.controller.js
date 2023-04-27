const Persona = require('../models/personas.model');
// crear las funciones de conexion con la BD

// funcion para buscar en BD todas las personas
const getAllPersonas = async (req, res) => {
  try {
    //buscar todas las personas  en mongo
    const allPersonas = await Persona.find();
    return res.json(allPersonas);
  } catch (error) {
    console.log(error);
  }
};

const getPersonById = async (req, res) => {
  try {
    const { id } = req.params;
    const persona = await Persona.findById(id).populate({
      path: 'productos',
      select: '_id nombre precio',
    });
    return res.status(200).json(persona);
  } catch (error) {}
};

// funcion para añadir una nueva persona la BD
const setNewPersona = async (req, res) => {
  try {
    const newPersona = new Persona(req.body);
    const createdPerson = await newPersona.save();
    return res.status(200).json(createdPerson);
  } catch (error) {
    return res.status(500).json(error);
  }
};
// /:id, los nuevos datos de la persona
const updatePersona = async (req, res) => {
  try {
    //paramas recibo el id
    const { id } = req.params;
    console.log(id);
    // por el body recibo toda la informacion de la persona
    const putPersona = new Persona(req.body);
    //asignarle un id  a la persona creada
    putPersona._id = id;
    // buscamos a la persona por id y le actualizamos el documento
    //findByIdAndUpdate(id, nuevosDatos)
    const updatePer = await Persona.findByIdAndUpdate(id, putPersona, {
      new: true,
    });
    //{new: true,} me permite ver los datos del nuevo documento modificado
    return res.status(200).json(updatePer);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePersona = async (req, res) => {
  try {
    //const id = req.params.id
    const { id } = req.params;
    const deletePer = await Persona.findByIdAndDelete(id);
    //Controlar que el elemento a eliminar existe, y sino existe devuelvo un mensaje y status 404
    if (!deletePer) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }
    return res.status(200).json(deletePer);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const filterByCity = async (req, res) => {
  try {
    //recogo la ciudad que la enviado el usuario para hacer el filtro
    const { citysearch } = req.query;
    const personCity = await Persona.find({
      city: citysearch.toLowerCase(),
    }).sort({ lastname: 1 });
    // sort()--> recibe un objeto indicado la propiedad por la que quieres ordenar  con el valor 1 si es de forma ascendente y -1 si es descendente
    return res.status(200).json(personCity);
  } catch (error) {
    return res.status(500).json(error);
  }
};
// crear un nueva ruta  que filtre por nombre, ordenar  por email descendente
const filterByNameOrder = async (req, res) => {
  try {
    let { nameSearch, sort } = req.query;
    sort = sort === 'asc' ? 1 : -1;
    const personName = await Persona.find({
      name: nameSearch,
    }).sort({
      email: sort,
    });
    return res.status(200).json(personName);
  } catch (error) {}
};

// http://localhost:3000/personas/city?citysearch=valencia&sort=asc

module.exports = {
  getAllPersonas,
  setNewPersona,
  updatePersona,
  deletePersona,
  filterByCity,
  filterByNameOrder,
  getPersonById,
};
