const {response} = require ('express');
const Pqrc = require('../models/pqrCategory.model');
const { findById, findByIdAndDelete } = require('../models/pqrCategory.model');


const pqrcGet = async(req = request,res = response)=>{
   
    const pqrc = await Pqrc.find().populate('type_pqr_id', 'name')
    const total = await Pqrc.countDocuments();
    res.json({
        total,
        pqrc
    })

}

const pqrcGetbyId = async(req = request,res = response)=>{
    const {id} = req.params
    //captura
    const pqrc = await Pqrc.findById(id).populate('type_pqr_id', 'name')
    res.json({
        pqrc
    })

}

const  pqrcPost = async(req,res=response)=>{
   
    let {name,type_pqr_id} = req.body;
    const pqrc =  new Pqrc({ name,type_pqr_id});

    //guardar en BD
    await pqrc.save();
    res.json({
        msg:'get API - controlador',
        pqrc
    })

}

const pqrcPut = async(req,res=response)=>{
    const {id} = req.params;
    const {_id,...resto} = req.body

    //TODO validar contra base de datos
    const pqrc = await Pqrc.findByIdAndUpdate(id,resto);

    res.json({
        msg:'get API - controlador',
        pqrc
    })

}

const pqrcDelete = async (req,res)=>{

    const {id} = req.params
    //borrar
    const pqrc = await Pqrc.findByIdAndDelete(id)
    res.json({
        pqrc
    })
    res.json({
        msg:'get API - controlador'
    })

}

module.exports = {
    pqrcGet,
    pqrcPost,
    pqrcPut,
    pqrcDelete,
    pqrcGetbyId

}