const mongoose = require ('mongoose');

const dbConection = async()=>{

    try{
        await mongoose.connect('mongodb+srv://admin:admin@yedi.6jm9ksf.mongodb.net/yediDB');
        console.log('Base de datos online')
    }
    catch(error){
        console.log(error)
        throw new Error('Error a la hora de iniciar la base de datos')
    }
}

module.exports = {
    dbConection
}
