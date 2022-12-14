const {response} = require ('express');
const Customer = require('../models/customer.model');
const { findById, findByIdAndDelete } = require('../models/customer.model');


const customerGet = async(req = request,res = response)=>{
   
    const customer = await Customer.find();
    const total = await Customer.countDocuments();
    res.json({
        total,
        customer
    })

}

const customerGetbyId = async(req = request,res = response)=>{
    const {id} = req.params
    //captura
    const customer = await Customer.findById(id)
    res.json({
        customer
    })

}

const  customerPost = async(req,res=response)=>{
   
    let {names,surnames,document, dateOfBirth,address,phone,email} = req.body;
    const fullName = `${names} ${surnames}`
    const getAge = dateOfBirth => Math.floor((new Date() - new Date(dateOfBirth).getTime()) / 3.15576e+10)
    const age =getAge(dateOfBirth)
    const customer =  new Customer({ names,surnames,fullName,dateOfBirth,age, document,address,phone,email});

    //guardar en BD
    await customer.save();
    res.json({
        msg:'get API - controlador',
        customer
    })

}

const customerPut = async(req,res=response)=>{
    const {id} = req.params;
    const {_id,...resto} = req.body

    //TODO validar contra base de datos
    resto.fullName = `${resto.names} ${resto.surnames}`
    const getAge = dateOfBirth => Math.floor((new Date() - new Date(dateOfBirth).getTime()) / 3.15576e+10)
    resto.age =getAge(resto.dateOfBirth)
    const customer = await Customer.findByIdAndUpdate(id,resto);

    res.json({
        msg:'get API - controlador',
         customer
    })

}

const customerDelete = async (req,res)=>{

    const {id} = req.params
    //borrar
    const customer = await Customer.findByIdAndDelete(id)
    res.json({
        customer
    })
    res.json({
        msg:'get API - controlador'
    })

}

module.exports = {
    customerGet,
    customerPost,
    customerPut,
    customerDelete,
    customerGetbyId

}