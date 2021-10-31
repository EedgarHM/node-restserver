const { response } = require('express');
const Usuario = require('../models/usuarioModel');
const bcrypt = require('bcryptjs');


const usuariosGet =  ( req, res=response )=>{
    const params = req.query;

    res.json({
        msg: 'Mensage GET API-Controller',
        params
    });
}

const usuariosPost = async ( req, res=response )=>{


    const { nombre, correo, password, rol } = req.body;

    const usuario = new Usuario( { nombre, correo, password, rol } );

    // Verificar si el correo existe
  
    // Encriptar la contrasenia
    const salt = bcrypt.genSaltSync();

    // Asingando el password encriptado a la propiedad password del objeto usuario
    usuario.password = bcrypt.hashSync( password , salt );


    // Guardar en la base de datos
    await usuario.save();

    res.json({
        msg:`El usuario ${usuario.correo} se registró correctamente`
    });
}


const usuariosPut = async ( req, res=response )=>{

    const id = req.params.id;
    const { password, google,...restoInfo } = req.body;

    // Validar ID con la base de datos
    if( password ){ // Si viene el password quiza lo quiera actualizar el usuario entonces debemos encriptar de nuevo 
        const salt = bcrypt.genSaltSync();
        restoInfo.password = bcrypt.hashSync(password, salt);

    }

    const usuario = await Usuario.findByIdAndUpdate( id, restoInfo);


    res.json({
        msg: 'Mensage PUT API-Controller',
       id
    });
}


const usuariosDelete =  ( req, res=response )=>{
    res.json({
        msg: 'Mensage DELETE API-Controller'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}