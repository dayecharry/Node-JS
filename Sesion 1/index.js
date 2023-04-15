const fs = require('fs');
//Http: Modulo que permite intercambio de información del cliente al servidor
const http = require('http');
const PORT = 3000;
// requestHandler : escucha las peticiones que haga el cliente sobre el puerto 3000
//reacciona una vez haya recibido esa peticion

//req: request, peticion realizada por el usuario
//res: response, respuesta dada  por el servidor al usuario que hizo  la peticion
const requestHandler = (req, res) => {
  //consoleo la url de la peticion
  console.log(req.url);
  if (req.url === '/datos') {
    fs.readFile('nombres.json', (err, data) => {
      //indicamos el tipo de respuesta que vamos a devolver
      res.setHeader('Content-type', 'text/json');
      // indicamos el codigo de respuesta
      res.writeHead(err ? 500 : 200);
      //finaliza la peticion con la respuesta devuelta por readFile
      res.end(data);
    });
  }
};
//creo el servidor
const server = http.createServer(requestHandler);
server.listen(PORT, () => {
  console.log(`La url de conexion es http://localhost:${PORT}`);
});
