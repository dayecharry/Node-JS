const express = require('express');

// ejecuto express para crear un nueveo servidor
const server = express();
const PORT = 3000;
//const routeUsers = require('./routes/users-route');
const routeAdmin = require('./routes/admin-routes');

// endpoint para hacer peticiones este servidor
server.use('/info', (req, res) => {
  const persona = {
    nombre: 'Petra',
    apellido: 'Ramirez',
  };
  res.send(persona);
});

// Ruta al que vamos a aplicar el middleware
server.use('/admin', routeAdmin);
//server.use('/users', routeUsers);

//diferentes tipos de comunicacion,
//GET --> el servidor devuelve un conjunto de informacion
//POST--> enviar datos desde el cliente,  el servidor lo procesa y retorna una respuesta (login,registro, consultar a la bd  a partir de datos enviado por el cliente )
// PUT,  cuando quieras editar datos de BD
//DELETE, cuando quieras eliminar datos de BD
server.listen(PORT, () => {
  console.log(`Url del servidor : http://localhost:${PORT}`);
});
