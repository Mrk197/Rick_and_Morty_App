const axios =require('axios');

const URL =  "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {
    const params = req.params;

    axios(`${URL}${params.id}`)
    .then( response =>{
        const character = {
            id: response.id, 
            name: response.name, 
            species: response.name,
            image: response.image,
            gender: response.gender
        }
        res.status(200).send(JSON.stringify(character))
    })
    .catch(
        res.status(500).send(JSON.stringify({message: "error"}))
    )
}

/* 
SERVIDOR CON METODO HTTP
const getCharById = (res, ID) => {
    axios(`https://rickandmortyapi.com/api/character/${ID}`)
    .then(response => response.data)
    .then(data => {
        const character = {
            id: data.id,
            image: data.image,
            name: data.name, 
            gender: data.gender,
            species: data.species
        }
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(character))
    })
    .catch(error => {
        res.writeHead(500, {"Content-Type": "text/plain"})
        res.end(error.message)
    })
};*/

module.exports = {
    getCharById
}

