const axios = require('axios');

const URL =  "https://rickandmortyapi.com/api/character/";

function getCharDetail(req, res) {
    const params = req.params;

    axios(`${URL}${id}`)
    .then(data => {
        const character = {
            id: data.id,
            image: data.image,
            name: data.name, 
            gender: data.gender,
            status: data.status,
            origin: data.origin,
            species: data.species
        }
        res.status(200).send(JSON.stringify(character))
    })
    .catch(
        res.status(500).send(JSON.stringify({message: "error"}))
    )
}

/* const getCharDetail = (res, id) =>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        const character = {
            id: data.id,
            image: data.image,
            name: data.name, 
            gender: data.gender,
            status: data.status,
            origin: data.origin,
            species: data.species
        }
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(character))
    })
    .catch(error => {
        res.writeHead(500, {"Content-Type": "text/plain"})
        res.end(error.message)
    })
} */

module.exports = {
    getCharDetail
}