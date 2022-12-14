const {response} = require ('express');
const Pqr = require('../models/register_pqr.model');
const { findById, findByIdAndDelete } = require('../models/register_pqr.model');


const registerPqrGet = async(req = request,res = response)=>{
   
    const pqr = await Pqr.find()
    .populate('pqr_category_id', '')
    .populate('user_id', '')
    .populate('client_id', '')
    const total = await Pqr.countDocuments();
    res.json({
        total,
        pqr
    })

}

const registerPqrGetbyId = async(req = request,res = response)=>{
    const {id} = req.params
    //captura
    const pqr = await Pqr.findById(id)
    .populate('pqr_category_id', '')
    .populate('user_id', '')
    .populate('client_id', '')
    console.log(pqr)
    res.json({
        pqr
    })

}

const  registerPqrPost = async(req,res=response)=>{
   
    let {client_id,user_id,pqr_category_id,date_register,description, status} = req.body;
    const pqr =  new Pqr({ client_id,user_id,pqr_category_id,date_register,description, status});

    //guardar en BD
    await pqr.save();
    res.json({
        msg:'get API - controlador',
        pqr
    })

}

const registerPqrPut = async(req,res=response)=>{
    const {id} = req.params;
    const {_id,...resto} = req.body

    //TODO validar contra base de datos
    const pqr= await Pqr.findByIdAndUpdate(id,resto);

    res.json({
        msg:'get API - controlador',
        pqr
    })

}

const registerPqrDelete = async (req,res)=>{

    const {id} = req.params
    //borrar
    const pqr= await Pqr.findByIdAndDelete(id)
    res.json({
        pqr
    })
    res.json({
        msg:'get API - controlador'
    })

}

module.exports = {
    registerPqrGet,
    registerPqrPost,
    registerPqrPut,
    registerPqrDelete,
    registerPqrGetbyId

}