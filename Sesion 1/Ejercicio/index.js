const fs = require('fs');
const http = require('http');

const requestHandler = (req, res) => {
    if (req.url === '/write-avengers') {
        writeAvengers(res);
    } else if (req.url === '/read-avengers') {
        readAvengers(res);
    } else if (req.url === '/remove-avengers') {
        removeAvengers(res);
    } else {
        res.setHeader('Content-Type', 'text/json');
        res.writeHead(200);
        res.end(`Welcome to the Avengers' organization tool!`);
    }
};

const writeAvengers = (res) => {
    fs.readFile('characters.json', (err, data) => {
        let parsedData = JSON.parse(data);
        parsedData = parsedData.filter(el => el.category === 'Avenger');
        fs.writeFile('avengers.json', JSON.stringify(parsedData), (err) => {
            if (err) {
                res.writeHead(500);
            } else {
                res.setHeader('Content-Type', 'text/json');
                res.writeHead(200);
                res.end('El archivo se guardó con exito');
            }
        });
    });
};

const removeAvengers = (res) => {  
    fs.unlink('avengers.json', (err) => {
        if (err) {
            res.writeHead(500);
            res.end('Error eliminando archivo');
        } else {
            res.setHeader('Content-Type', 'text/json');
            res.writeHead(200);
            res.end('El archivo se eliminó con exito');
        }
    })
};

const readAvengers = (res) => {
    fs.readFile('avengers.json', (err, data) => {
        res.setHeader('Content-Type', 'text/json');
        if (err) {
            res.writeHead(404);
            res.end('El archivo avengers todavía no existe');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
};

const PORT = 3000;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    console.log(`Url: http://localhost:${PORT}`);
});