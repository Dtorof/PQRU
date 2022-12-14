const {Router}= require('express');
const {check} = require('express-validator')
const {login} =require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

router.post('/login',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'El la password es obligatorio').notEmpty(),validarCampos,
],login);


module.exports = router;