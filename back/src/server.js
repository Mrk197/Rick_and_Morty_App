//const http = require('http');
//const characters = require('./utils/data');
const {getCharById} = require('./controllers/getCharById');
const {getCharDetail} = require('./controllers/getCharDetail');
const router =require('./routes/index.js');
const favs = require('./utils/favs.js')

const express = require('express');
const server = express();
const PORT = 3001;

server.use(express.json());
server.use("/", router);

server.post("/rickandmorty/fav", (req, res) =>{
    favs.push(req.body);
    res.status(200).send("Elemento agregado")
})

server.get("/rickandmorty/fav", (req, res) =>{
    res.send(JSON.stringify(favs));
})

server.delete("/rickandmorty/fav/:id", (req, res) => {
    const {id}= req.params
    const newFavs = favs.filter(fav => fav.id !== id );
    favs = newFavs;
    res.send(JSON.stringify(newFavs))
})

server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});

/* http.createServer((req,res) =>{
    console.log(`Server raised in port ${PORT}`);
    res.setHeader('Access-Control-Allow-Origin', '*'); //darle permiso al cliente hacer petición a la API
    let id =req.url.split("/").at(-1);

    if (req.url.includes('onsearch')) {
        getCharById(res, id);
    }
    else if(req.url.includes("detail")){
        getCharDetail(res, id);
    }
}).listen(3001, 'localhost') */


/* http.createServer((req, res) => {
    console.log(`Server raised in port ${PORT}`);
    res.setHeader('Access-Control-Allow-Origin', '*'); //darle permiso al cliente hacer petición a la API
    if (req.url.includes("rickandmorty/character")) {
        //var q = url.parse(req.url, true).query;
        const params_url =req.url.split("/").at(-1);
        console.log("id", params_url);

        /* let characterFind = characters.find(char => char.id = Number(params_url));
        //find devuelrve el objeto 
        //filter devuelve un nuevo array
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify(characterFind)); */
    //}

//}).listen(3001, 'localhost') */