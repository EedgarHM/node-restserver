const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validarCampos');

const { usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete } = require('../controllers/userController');

const { rolValido, emailExiste } = require('../helpers/db-validators');

const router = Router();

router.get('/:id',usuariosGet);

router.put('/:id',usuariosPut);

//AGRAGAMOS EL MIDDLEWARE PARA VALIDAR EL CORREO
router.post('/', [
    check('nombre', "Un alienigena se robo tu nombre, llena el campo por favor").not().isEmpty(),
    check('password',"krnal pon una pass mas segura, mayor a 6 letras").isLength({min:6}),
    check('correo', 'Hijole krnal, ese email no es válido').isEmail(),
    check('correo').custom( emailExiste ),
    check('rol').custom( rolValido ),
    validarCampos
    ], usuariosPost);

router.delete('/', usuariosDelete);

module.exports = router;