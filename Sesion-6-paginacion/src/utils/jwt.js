const jwt = require('jsonwebtoken');

const generateSign = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_KEY, { expiresIn: '1h' });
  //generar un token, o firma basado en el id y usuario que reciba como parametro
};
const verifySign = (token) => {
  return jwt.verify(token, process.env.JWT_KEY);
  //comprobar que  el token  en base da nuestro
};

const closeSesion = (token) => {
  /* console.log(token);
  return jwt.sign(token, process.env.JWT_KEY, { expiresIn: '1s' });*/
};

module.exports = { generateSign, verifySign, closeSesion };
