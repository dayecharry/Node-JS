const express = require('express');
//const cors = require('cors');

// ejecuto express para crear un nuevo servidor
const server = express();
//server.use(cors());
//para que me lleguen los body params en formato de tipo JSON
server.use(express.json());
const PORT = 3000;
const routeUsers = require('./routes/users-route');
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
server.use('/users', routeUsers);

//diferentes tipos de comunicacion,
//GET --> el servidor devuelve un conjunto de informacion
//POST--> enviar datos desde el cliente,  el servidor lo procesa y retorna una respuesta (login,registro, consultar a la bd  a partir de datos enviado por el cliente )
// PUT,  cuando quieras editar datos de BD
//DELETE, cuando quieras eliminar datos de BD
server.listen(PORT, () => {
  console.log(`Url del servidor : http://localhost:${PORT}`);
});
