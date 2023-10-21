const { Favorite, User } = require("../DB_connection");

const postFav = async(req, res) => {
    const {name, origin, status, image, species, gender, userId} = req.body;
    console.log(req.body);
    try {
        if(!name || !origin || !status || !image || !species || !gender) return res.status(401).json({message:"Faltan datos"});
        if(!userId) return res.status(401).json({message:"Falta indicar a que usuario pertenece"});
        const newFav = await Favorite.create({name, origin, status, image, species, gender});
        console.log("newFav:  ", newFav);
        //newFav.addFavorite([userId]);
        const allFavorites = await Favorite.findAll();
        return res.status(200).json(allFavorites);
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
};

module.exports = postFav;