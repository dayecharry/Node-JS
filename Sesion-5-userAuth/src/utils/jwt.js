const jwt = require('jsonwebtoken');

//const JWT_KEY = 'Updagra2023oiyb.787878*nbsafgytdgknx548789789v.';

const generateSign = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_KEY, { expiresIn: '1h' });
  //generar un token, o firma basado en el id y usuario que reciba como parametro
};
const verifySign = (token) => {
  return jwt.verify(token, JWT_KEY);
  //comprobar que  el token  en base da nuestro
};

module.exports = { generateSign, verifySign };
