const {model} = require('mongoose');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



const Response = Schema({ 
        register_pqr_id:{
            type: mongoose.Schema.Types.ObjectId, ref: 'Pqr',
            required: [true, 'El pqr es obligatorio']
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Usuario',
            required: [true, 'El Usuario es obligatorio']
        },
        desc_solution:{
            type: String,
            required: [true, 'la solucion es obligatorio']
        }
        },{timestamps: false})

        Response.methods.toJSON= function(){
            const{__v,_id,...Response} = this.toObject();
            Response.id = _id;
            return Response
        }

module.exports= model('Response',Response)
  