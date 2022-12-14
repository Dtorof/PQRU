const {response} = require ('express');
const { Register } =require ( '../models/register_pqr.model.js')
const   Traceability  =require( '../models/traceability.model.js')
const { findById, findByIdAndDelete } = require('../models/traceability.model');

const getTraceability = async (req = request,res = response) => {
   const traceabilityist = await Traceability.find()
        .populate('register_pqr_id', '')
        const total = await Traceability.countDocuments();
    res.json({
        total,
        traceabilityist
    })
   
}

const traceabilityById = async (req,res) => {
    const { id } = req.params
    try{
        const itemId = await Traceability.findAll({
          include: [{model:Register}],
            where: {
              register_pqr_id:id,
            },
          });

          if (itemId) {
            res.status(200).json(itemId);
          } else {
            res.status(404).json({message: "El registro no existe"});
          }
        
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

module.exports = {
  getTraceability,
  traceabilityById

}

