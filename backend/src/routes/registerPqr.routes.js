const {Router}= require('express');
const {check} = require('express-validator')
const { registerPqrGet,
    registerPqrPost,
    registerPqrPut,
    registerPqrDelete,
    registerPqrGetbyId} = require('../controllers/registerPqr.controller');
const router = Router()


router.get('/', registerPqrGet);
router.get('/:id',registerPqrGetbyId)
router.put('/:id',registerPqrPut);
router.post('/',registerPqrPost);
router.delete('/:id', registerPqrDelete);
module.exports = router;