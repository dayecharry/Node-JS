const fs = require('fs'); // trabajar con ficheros

const nombre = 'dayana romero';
const names = ['pepe', 'luis', 'luna'];

//writeFile: Nos permite escribir dentro de un fichero la información dada, si el archivo no existe lo crea y sino lo sobreescribe
//- path del archivo
//! - datos que necesitas guardar en ese fichero (Siempre debe ser un string)
//- callback : función que quiero ejecutar una vez  ha terminado de escribir en el archivo, o en caso de que haya ocurrido un error
fs.writeFile('informacion.txt', nombre, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('se ha escrito el archivo');
  }
});
fs.writeFile('nombres.json', JSON.stringify(names), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('se ha escrito el archivo');
  }
});

fs.readFile('nombres.json', (err, data) => {
  if (err) {
    console.log('ha ocurrido un error');
  } else {
    console.log(JSON.parse(data));
  }
});
