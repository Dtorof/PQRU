const {model} = require('mongoose');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const registerPqr = Schema({ 
        client_id:{
            type: mongoose.Schema.Types.ObjectId, ref: 'Customer',
            required: [true, 'El Cliente es obligatorio']
      
        },
        
        user_id: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Usuario',
            required: [true, 'El Usuario es obligatorio']
        },
        pqr_category_id:{
            type: mongoose.Schema.Types.ObjectId, ref: 'PqrCategory',
            required: [true, 'La categoria es obligatorio']
        },
        date_register:{ 
            type: String,
            allowNull: true
        },
        description:{ 
            type: String,
            allowNull: true
        },
        status:{ 
            type: String,
            allowNull: true,
            defaultValue: 'En proceso'
        }
        },{timestamps: false})

registerPqr.methods.toJSON= function(){
    const{__v,_id,...registerPqr} = this.toObject();
    registerPqr.id = _id;
    return registerPqr
}

module.exports= model('Pqr',registerPqr)
  
        