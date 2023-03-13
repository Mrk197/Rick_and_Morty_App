const axios = require('axios');

const URL =  "https://rickandmortyapi.com/api/character/";

async function getCharDetail(req, res) {
    try {
        const {id} = req.params;
        const {data} = await axios(`${URL}${id}`);
        const character = {
            id: data.id,
            image: data.image,
            name: data.name, 
            gender: data.gender,
            status: data.status,
            origin: data.origin,
            species: data.species
        }
        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
/* function getCharDetail(req, res) {
    const {id} = req.params;

    axios(`${URL}${id}`)
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
        res.status(200).send(JSON.stringify(character))
    })
    .catch( (error) =>{
        //res.status(500).send(JSON.stringify({error: error.message}))
        res.status(500).json({error: error.message})
    }
    )
} */

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