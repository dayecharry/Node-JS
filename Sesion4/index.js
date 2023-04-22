const express = require('express');
const cors = require('cors');
const { connect } = require('./src/utils/database');
const routerPersona = require('./src/api/routes/personas.routes');

// ejecuto express para crear un nuevo servidor
const app = express();
connect(); // conexion con la BD
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.use('/personas', routerPersona);

app.listen(PORT, () => {
  console.log(`Url del servidor : http://localhost:${PORT}`);
});
