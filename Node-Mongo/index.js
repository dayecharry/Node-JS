// Incluyo express
const express = require('express');
//Ejecuto el fichero conex, que permite conectarte con la BD
require('./conex');
//defino el puerto por el que se va a conectar el servidor
const PORT = 3000;

// creo mi servidor con express
const server = express();

// voy creando todos los endpoint que necesite.

server.listen(PORT, () => {
  console.log(`Se ha conectado en http://localhost:${PORT}`);
});
