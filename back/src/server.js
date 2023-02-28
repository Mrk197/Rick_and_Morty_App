const http = require('http');
const characters = require('./utils/data');
const PORT = 3001;

http.createServer((req, res) => {
    console.log(`Server raised in port ${PORT}`);
    res.setHeader('Access-Control-Allow-Origin', '*'); //darle permiso al cliente hacer petición a la API
    if(req.url === "/home"){
        res.writeHead(200, {"Content-Type": "text/plain"})
        res.end("Servidor Trabajando")
    }
    else if (req.url.includes("rickandmorty/character")) {
        //var q = url.parse(req.url, true).query;
        const params_url =req.url.split("/").at(-1);
        console.log("id", params_url);

        let characterFind = characters.find(char => char.id = Number(params_url));
        //find devuelrve el objeto 
        //filter devuelve un nuevo array
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify(characterFind));
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"})
        res.end("página encontrada")
    }
}).listen(3001, 'localhost')