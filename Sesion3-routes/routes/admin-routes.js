const express = require('express');
// definimos un nuevo router de express. Gestiono las rutas para endpoint
const routerAdmin = express.Router();
const products = ['Zapatillas', 'Camiseta', 'falda'];

// Creo un endpoint por cada ruta, con un metodo correspondiente. GET, POST, PUT, DELETE

routerAdmin.get('/products', (req, res) => {
  res.status(200);
  //200-> todo OK
  //404-> no encuentra la peticion
  //400-> no ha ido bien la peticion
  //500-> Error interno del servidor
  res.send(products);
});
// productos con filtro
// mostrar todos los usuarios

module.exports = routerAdmin;
