const {Router}= require('express');
const {check} = require('express-validator')
const { getResponses,
    createResponse,
    editResponse,
    deleteResponse,
    responseById} = require('../controllers/response_pqr.controller');
const router = Router()


router.get('/', getResponses);
router.get('/:id',responseById)
router.put('/:id',editResponse);
router.post('/',createResponse);
router.delete('/:id', deleteResponse);
module.exports = router;