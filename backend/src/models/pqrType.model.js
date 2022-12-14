const {Schema, model} = require('mongoose');

const pqrt = Schema({
    name:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    }

})
pqrt.methods.toJSON= function(){
    const{__v,_id,...pqrt} = this.toObject();
    pqrt.id = _id;
    return pqrt
}

module.exports= model('PqrType',pqrt)
            