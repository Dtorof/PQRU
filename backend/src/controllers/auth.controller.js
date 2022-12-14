const {response} = require ('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/user.model');
const { generarJWT } = require('../helpers/generar-jwt');
const login = async (req,res =response)=>{
    const {correo,password} = req.body
    try{
        //Verificar is email existe
        const usuario = await Usuario.findOne({correo})
        if(!usuario){
            return res.status(400).json({
                msg: "Usuario / Password no son correctos (Correo)"
            })
        }
        // Verificar contrase;a
        const validPassword = bcryptjs.compareSync(password,usuario.password)
        if(!validPassword){
            return res.status(400).json({
                msg: "Usuario / Password no son correctos (Password)"
            })
        }
        //Generar JWT 
        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        })
    }catch(error){
        return res.status(500).json({
            msg:`hable con el administrador ${error}`
        })
        
    }
    
}

module.exports = {
    login
}