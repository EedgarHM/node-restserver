const Role = require('../models/roleModel');
const Usuario = require('../models/usuarioModel');

const rolValido = async (rol ='') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol){
        throw new Error(`El rol [${ rol }] no existe en la base de datos`);
    }
}

const emailExiste = async (correo='') => {

    const existeCorreo = await Usuario.findOne({ correo });

    if(existeCorreo){
     throw new Error(`El correo: ${correo} Ya se encuentra registrado`);
    }

}

module.exports = { rolValido, emailExiste };