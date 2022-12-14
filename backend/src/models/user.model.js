const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    correo:{
        type:String,
        required: [true, 'El correo es obligatorio']
    },
    password:{
        type:String,
        required: [true,'la contrasena es obligatorioa']
    },
    document: {
        type: String,
        allowNull: [true,'el documento es obligatorioa']
    },

})

UsuarioSchema.methods.toJSON= function(){
    const{__v,password,_id,...usuario} = this.toObject();
    usuario.id = _id;
    return usuario
}

module.exports= model('Usuario',UsuarioSchema)