const {Router}= require('express');
const {check} = require('express-validator')
const { pqrcGet,
    pqrcPost,
    pqrcPut,
    pqrcDelete,
    pqrcGetbyId} = require('../controllers/pqrCategory.controller');
const router = Router()


router.get('/', pqrcGet);
router.get('/:id',pqrcGetbyId)
router.put('/:id',pqrcPut);
router.post('/',pqrcPost);
router.delete('/:id', pqrcDelete);
module.exports = router;