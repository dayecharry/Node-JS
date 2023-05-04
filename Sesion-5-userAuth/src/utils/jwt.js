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
  const payload = jwt.decode(token);
  const tokenId = payload.jti;
  payload.exp = payload.iat;
  console.log(tokenId);
  return payload;
};

module.exports = { generateSign, verifySign, closeSesion };
