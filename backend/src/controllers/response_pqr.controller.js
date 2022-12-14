const {response} = require ('express');
const Response = require('../models/response_pqr.model');
const Pqr = require('../models/register_pqr.model');
const Customer = require('../models/customer.model');
const { findById, findByIdAndDelete } = require('../models/response_pqr.model');
const { transporter } = require( '../helpers/configGmail.js')


const getResponses = async (req,res) => {
    const pqr = await Response.find()
    .populate('register_pqr_id', '')
    .populate('user_id', '')
    const total = await Response.countDocuments();
    res.json({
        total,
        pqr
    })
}

const responseById = async (req,res) => {
    const response = await Response.findById(id)
    .populate('register_pqr_id', '')
    .populate('user_id', '')
    console.log(pqr)
    res.json({
        response
    })
       
}

const createResponse = async  (req,res) => {

    try {
    
    const { register_pqr_id, user_id, desc_solution } = req.body
    const response =  new Pqr({ register_pqr_id, user_id, desc_solution});

    const today = new Date()
    
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    let dateNow = today.getFullYear() + '-' + (today.getMonth()+1) + '-' +  today.getDate() 
    let  date_register = `${dateNow} ${time}`

    await response.save();


    const searchByPqr_id = await Pqr.find({"_id":register_pqr_id})
    console.log(searchByPqr_id)
    

    const [{customer}] = searchByPqr_id
    const {email} = customer

    const editRegister = await Register.findByPk(register_pqr_id)
      editRegister.status = "Contestado"
      await editRegister.save()

    const noveltyTraceability = await Traceability.create({
        register_pqr_id, date: date_register, novelty: 'Contestado'
    })


    const info = await transporter.sendMail({
        from: '"PQR Response ." <jorgetarifa33@gmail.com>', 
        to: email,
        subject: "PQR ha sido actualizada ✔", 
        text: `PQR con radicado N° ${register_pqr_id}, ha sido actualizado a: Contestado. Por favor, verifica las novedades.`
      });

      

    res.status(200).json({message: "Register was created succesfully", createRegister, email})

    } catch (error) {
        console.error(error)
    }
    
}

const deleteResponse = async (req,res) => {
    const { id } = req.params
    try{
        const deleteOne = await Response.destroy({
            where: {
                id
            }
        })
     
         res.status(200).json({message: `Register with id:${id} was succesfully removed`})
       
       }catch(err){
            console.error(err)
       }
}

const editResponse = async (req,res) => {
    const { id } = req.params
    try {

        const { register_pqr_id, user_id, desc_solution } = req.body
    
        const editRegister = await Response.findByPk(id)
        editRegister.register_pqr_id = register_pqr_id
        editRegister.user_id = user_id
        editRegister.desc_solution = desc_solution
        await editRegister.save()
    
        res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}

module.exports = {
    getResponses,
    createResponse,
    editResponse,
    deleteResponse,
    responseById

}
