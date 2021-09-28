const { request } = require('express');
const express = require('express');
const cors = require('cors');
class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //  Middlewares
        this.middlewares();

        // Lectura  y parseo del body
        this.app.use(express.json());
        

        //  Rutas de mi aplicacion
        this.routes();
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