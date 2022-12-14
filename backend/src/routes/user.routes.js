const {Router}= require('express');
const {check} = require('express-validator')
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete,usuariosGetbyId} = require('../controllers/user.controller');
const {validarCampos} = require('../middlewares/validar-campos')
const {esRolValido,emailExiste} =  require('../helpers/db-validators')
const router = Router()


router.get('/', usuariosGet);
router.get('/:id',usuariosGetbyId)
router.put('/:id',[
  check('id','No es un Id Valido').isMongoId(),validarCampos,usuariosPut]);
router.post('/',
[
  check('correo','El correo no es valido').isEmail(),
  check('correo').custom(emailExiste),
  check('password','La password no es valida').notEmpty(),
  check('nombre','El nombre es obligatorio').notEmpty(),
  //check('rol','El rol no es valido').isIn(['ADMIN_ROLE','USER_ROLE'])],validarCampos,usuariosPost);
  validarCampos,usuariosPost]);
router.delete('/:id', usuariosDelete);
  module.exports = router;