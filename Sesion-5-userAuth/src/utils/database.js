const mongoose = require('mongoose');

const user = 'dayana';
const pass = 'Dayana123.';
const db = 'ProjectAth';
const DB_URL = `mongodb+srv://${user}:${pass}@cluster0.fci00lm.mongodb.net/${db}?retryWrites=true&w=majority`;

const connect = async () => {
  try {
    // aqui nos conectamos con la BD
    const db = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Base de datos : ${name} y host: ${host}`);
  } catch (error) {}
};

module.exports = { connect };
