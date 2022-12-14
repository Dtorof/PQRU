const {Router}= require('express');
const {check} = require('express-validator')
const { customerGet,
    customerPost,
    customerPut,
    customerDelete,
    customerGetbyId} = require('../controllers/customer.controller');
const router = Router()


router.get('/', customerGet);
router.get('/:id',customerGetbyId)
router.put('/:id',customerPut);
router.post('/',customerPost);
router.delete('/:id', customerDelete);
module.exports = router;