const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const { connect } = require('./src/utils/database');
const userRoutes = require('./src/api/routes/characters.routes');

// ejecuto express para crear un nuevo servidor
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const app = express();
connect(); // conexión con la BD
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use('/characters', userRoutes);
app.listen(PORT, () => {
  console.log(`Url del servidor : http://localhost:${PORT}`);
});
