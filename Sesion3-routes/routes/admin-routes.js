const express = require('express');
// definimos un nuevo router de express. Gestiono las rutas para endpoint
const routerAdmin = express.Router();
const products = ['Zapatillas', 'Camiseta', 'falda', 'camisa'];

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
// Definimos una ruta dinamica con un parametro ":<nombre-parametro>"
routerAdmin.get('/products/:name', (req, res) => {
  // para obtener el valor variable de la ruta , accedo al objeto de params de la request
  console.log(req.params); // rutas dinámicas
  const filteredProduct = products.filter((product) => {
    return product.toLowerCase().includes(req.params.name.toLowerCase());
  });
  if (filteredProduct.length === 0) {
    res.status(404);
    res.send('No hay productos con esas caracteristicas');
  } else {
    res.status(200);
    res.send(filteredProduct);
  }
});
// mostrar un producto por una posisicion enviada a traves de los query params
routerAdmin.get('/productFilter', (req, res) => {
  // reques query , es un objeto con todos los querys params que has puesto en la ruta
  console.log(req.query);
  res.send(products[req.query.position]);
});

//endpoint del tipo post, permite enviar información a traves de la peticion del cliente
routerAdmin.post('/add', (request, response) => {
  console.log(request.body);
  products.push(request.body.name);
  // respuesta del tipo JSON
  response.json(products);
});

module.exports = routerAdmin;
