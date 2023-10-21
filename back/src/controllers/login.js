const { User } = require("../DB_connection");

const login = async (req, res) => {
    const {email, password} = req.query;
    try {
        if(!email || !password){
            return res.status(400).json({message:"Faltan datos"});
        }
        const findUser = await User.findOne({ where: {email}});
        if(findUser === null) return res.status(404).json({message:"Usuario no encontrado"});
        else {
            if(password === findUser.password) return res.status(200).json({access: true});
            return res.status(403).json({message:"Contraseña incorrecta"});
        }
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
};

module.exports = login;