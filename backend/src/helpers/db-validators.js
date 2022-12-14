const Role = require('../models/rol.model')
const Usuario = require('../models/user.model')

const esRolValido = async(rol ='')=>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
      throw new Error(`El rol ${rol} no esta registrado en la base de datos`)
    }
  }

  const emailExiste = async(correo = '') =>{
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        throw new Error (`El correo: ${correo},ya esta registrado `);
    }
  }

  
module.exports ={
    esRolValido,
    emailExiste
}