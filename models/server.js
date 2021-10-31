const { request } = require('express');
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Conexion a la base de datos
        this.conectarDB();


        //  Middlewares
        this.middlewares();

        // Lectura  y parseo del body
        this.app.use(express.json());


        //  Rutas de mi aplicacion
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        // Cors
        this.app.use(cors());

        //  Directorio publico
        this.app.use(express.static('public'));
    }


    routes(){
        this.app.use(this.usuariosPath,require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, () => console.log(`Server Ready on http://localhost:${this.port}`))
    }
}

module.exports = Server;