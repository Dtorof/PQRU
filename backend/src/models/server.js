const express = require('express');
const cors = require('cors');
const { dbConection } = require('../db/config');

class Server {
    constructor (){
        this.app = express();
        this.port = process.env.PORT
        this.UsuariosPath= '/api/usuarios'
        this.authPath = '/api/auth'
        this.CustomersPath = '/api/customers'
        this.PqrTypePath = '/api/pqrt'
        this.PqrCategoryPath = '/api/pqrc'
        this.PqrPath = '/api/pqr'
        this.ResponsePath ='/api/response'
        this.TrasabilityPath ='/api/trasability'
        //Conectar base de datos 
        this.conectarDb();

        //Middelwares
        this.middelware();
        //Rutas de mi aplicacion 
        this.routes();
    }

    async conectarDb(){
        
        await dbConection();
    }

    middelware(){

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
        
    }

    routes(){
        this.app.use( this.authPath , require('../routes/auth.routes'));
        this.app.use( this.CustomersPath, require('../routes/customer.routes'));
        this.app.use( this.PqrTypePath, require('../routes/pqrType.routes'));
        this.app.use( this.PqrCategoryPath, require('../routes/pqrCategory.routes'));
        this.app.use( this.PqrPath, require('../routes/registerPqr.routes'));
        this.app.use( this.ResponsePath, require('../routes/response_pqr.routes'));
        this.app.use( this.TrasabilityPath, require('../routes/traceability.routes'));
        this.app.use( this.UsuariosPath, require('../routes/user.routes'));
        
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en el puerto : ${this.port}`)
        })
    }

   
}

module.exports = Server;