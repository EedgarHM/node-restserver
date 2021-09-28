const { response } = require('express');

const usuariosGet =  ( req, res=response )=>{
    const params = req.query;

    res.json({
        msg: 'Mensage GET API-Controller',
        params
    });
}

const usuariosPost =  ( req, res=response )=>{

    const body = req.body;

    res.json({
        msg: 'Mensage POST API-Controller',
        body
    });
}


const usuariosPut =  ( req, res=response )=>{

    const id = req.params.id;
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