const mongoose = require ('mongoose');

const dbConection = async()=>{

    try{
        await mongoose.connect('mongodb://mongo:i4lRPiZmyCGz8A11OwNh@containers-us-west-166.railway.app:5821');
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
