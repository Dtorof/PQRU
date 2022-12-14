const {response} = require ('express');
const Pqrt = require('../models/pqrType.model');
const { findById, findByIdAndDelete } = require('../models/pqrType.model');


const pqrtGet = async(req = request,res = response)=>{
   
    const pqrt = await Pqrt.find();
    const total = await Pqrt.countDocuments();
    res.json({
        total,
        pqrt
    })

}

const pqrtGetbyId = async(req = request,res = response)=>{
    const {id} = req.params
    //captura
    const pqrt = await Pqrt.findById(id)
    res.json({
        pqrt
    })

}

const  pqrtPost = async(req,res=response)=>{
   
    let {name} = req.body;
    const pqrt =  new Pqrt({ name});

    //guardar en BD
    await pqrt.save();
    res.json({
        msg:'get API - controlador',
        pqrt
    })

}

const pqrtPut = async(req,res=response)=>{
    const {id} = req.params;
    const {_id,...resto} = req.body

    //TODO validar contra base de datos
    const pqrt = await Pqrt.findByIdAndUpdate(id,resto);

    res.json({
        msg:'get API - controlador',
        pqrt
    })

}

const pqrtDelete = async (req,res)=>{

    const {id} = req.params
    //borrar
    const pqrt = await Pqrt.findByIdAndDelete(id)
    res.json({
        pqrt
    })
    res.json({
        msg:'get API - controlador'
    })

}

module.exports = {
    pqrtGet,
    pqrtPost,
    pqrtPut,
    pqrtDelete,
    pqrtGetbyId

}