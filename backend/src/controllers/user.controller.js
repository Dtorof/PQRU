const {response} = require ('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/user.model');
const { findById, findByIdAndDelete } = require('../models/user.model');


const usuariosGet = async(req = request,res = response)=>{
   
    const usuarios = await Usuario.find();
    const total = await Usuario.countDocuments();
    res.json({
        total,
        usuarios
    })

}

const usuariosGetbyId = async(req = request,res = response)=>{
    const {id} = req.params
    //captura
    const usuario = await Usuario.findById(id)
    res.json({
        usuario
    })

}

const  usuariosPost = async(req,res=response)=>{
   
    const {nombre,correo,password,document} = req.body;
    const usuario =  new Usuario({nombre,correo,password,document});
    //Verificar si el correo existe
   
    // Encriptar la contra
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt)
    //guardar en BD
    await usuario.save();
    res.json({
        msg:'get API - controlador',
        usuario
    })

}

const usuariosPut = async(req,res=response)=>{
    const {id} = req.params;
    const {_id,password,...resto} = req.body

    //TODO validar contra base de datos

    if(password){
        //encriptar contras
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password,salt);
    }
    const usuario = await Usuario.findByIdAndUpdate(id,resto);

    res.json({
        msg:'get API - controlador',
        usuario
    })

}

const usuariosDelete = async (req,res)=>{

    const {id} = req.params
    //borrar
    const usuario = await Usuario.findByIdAndDelete(id)
    res.json({
        usuario
    })
    res.json({
        msg:'get API - controlador'
    })

}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosGetbyId

}