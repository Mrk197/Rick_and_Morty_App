const { response } = require("express");
const { Favorite } = require("../DB_connection");

 const deleteFav = async (req, res)=> {
    const {id} = req.params;
    try {
        if (id) {
            const response = await Favorite.destroy({where: {id}});
            if (response) {
                const allFavorites = await Favorite.findAll();
                return res.status(201).json(allFavorites);
            }
            return res.status(300).json({message: "no existe el registro"})
        }
        return res.status(401).json({message:"Faltan datos"});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
 };

 module.exports = deleteFav;