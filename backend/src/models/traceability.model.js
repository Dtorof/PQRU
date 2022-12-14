const {model} = require('mongoose');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



const Traceability = Schema({ 
        register_pqr_id:{
            type: mongoose.Schema.Types.ObjectId, ref: 'Pqr',
            required: [true, 'El pqr es obligatorio']
        }, 
        date: {
            type: String,
            required: [true, 'La fecha es obligatorio']
        },
        novelty:{
            type: String,
            required: [false, 'La novedad es obligatoria']
        }
        },{timestamps: false})


        Traceability.methods.toJSON= function(){
            const{__v,_id,...Traceability} = this.toObject();
            Traceability.id = _id;
            return Traceability
        }
        module.exports= model('Traceability',Traceability)