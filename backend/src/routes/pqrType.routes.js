const {Router}= require('express');
const {check} = require('express-validator')
const { pqrtGet,
    pqrtPost,
    pqrtPut,
    pqrtDelete,
    pqrtGetbyId} = require('../controllers/pqrType.controller');
const router = Router()


router.get('/', pqrtGet);
router.get('/:id',pqrtGetbyId)
router.put('/:id',pqrtPut);
router.post('/',pqrtPost);
router.delete('/:id', pqrtDelete);
module.exports = router;