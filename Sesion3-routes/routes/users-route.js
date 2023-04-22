const express = require('express');
const routerUser = express.Router();
const user = {
  email: 'dayana@gmail.com',
  password: '123456',
};

const users = [user];
// registrar permita añadir un nuevo usuario al array de users
routerUser.post('/add', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.send(users);
});
// login --> busque si el usuario y contraseña y devuelva un mensaje si ha iniciado sesion o no.

routerUser.post('/login', (req, res) => {
  const userFind = users.find((user) => {
    return user.email === req.body.email && user.password === req.body.password;
  });
  if (userFind) {
    res.send('Login exitoso');
  } else {
    res.send('Usuario o contraseña incorrecta');
  }
  console.log(userFind);
});
module.exports = routerUser;
