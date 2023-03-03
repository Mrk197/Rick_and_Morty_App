const axios =require('axios');

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
};

module.exports = {
    getCharById
}

