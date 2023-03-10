const axios =require('axios');

const URL =  "https://rickandmortyapi.com/api/character";

function getCharById(req, res) {
    const params = req.params;

    axios(`${URL}/${params.id}`)
    .then(response => response.data)
    .then( data =>{
        const character = {
            id: data.id, 
            name: data.name, 
            species: data.name,
            image: data.image,
            gender: data.gender
        }
        //res.status(200).send(JSON.stringify(character))
        res.status(200).json(character);
    })
    .catch( (error) =>{
        //res.status(500).send(JSON.stringify({error: error.message}))
        res.status(500).json({error: error.message})
    }
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

