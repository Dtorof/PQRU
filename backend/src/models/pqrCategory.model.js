const {model} = require('mongoose');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const pqrc  = Schema({


    name: {
        type: String,
        allowNull: false
    },
    type_pqr_id: {type: mongoose.Schema.Types.ObjectId, ref: 'PqrType'}

    },{timestamps: true})

    pqrc.methods.toJSON= function(){
        const{__v,_id,...pqrc} = this.toObject();
        pqrc.id = _id;
        return pqrc
    }

module.exports= model('PqrCategory',pqrc)
            