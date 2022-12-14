const {Schema, model} = require('mongoose');


 const Customer= Schema({
    names: {
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    document: {
        type:String,
        required: [true, 'El documento es obligatorio']
    },
    email: {
        type:String,
        required: [true, 'El email es obligatorio']
    },
    
    surnames: {
        type:String,
        required: [true, 'El apellido es obligatorio']
    },
    fullName:{
        type:String,

    },
    dateOfBirth:{
        type:String,
        required: [true, 'la fecha de cumple es obligatorio']
    },
    age:{
        type:String,


    },
    
    address: {
        type:String,
        required: [true, 'El direccion es obligatorio']
    },
    phone:{
        type:String,
        required: [true, 'El telefono es obligatorio']
    }
})

Customer.methods.toJSON= function(){
    const{_id,...customer} = this.toObject();
    customer.id = _id;
    return customer
}
  
module.exports= model('Customer',Customer)