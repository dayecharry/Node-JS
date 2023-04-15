const mongoose = require('mongoose');
//usuario de conexion con la bd
const user = 'dayana';
//password de
const password = 'Dayana123.';
const db = 'prueba'; // nombre de la base de datos que hayan definido

// enlace de conexion que nos proporciona MongoDb
const uri = `mongodb+srv://${user}:${password}@cluster0.fci00lm.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('conectado a mongodb'))
  .catch((e) => console.log('error de conexión', e));
