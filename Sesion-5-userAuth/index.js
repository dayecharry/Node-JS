const express = require('express');
const cors = require('cors');
const { connect } = require('./src/utils/database');
const userRoutes = require('./src/api/routes/user.routes');

// ejecuto express para crear un nuevo servidor
const app = express();
connect(); // conexion con la BD
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.use('/user', userRoutes);
app.listen(PORT, () => {
  console.log(`Url del servidor : http://localhost:${PORT}`);
});
