const {Router}= require('express');
const{
    getTraceability,
    traceabilityById
} = require( '../controllers/traceability.controller.js')

const router = Router()

router.get('/', getTraceability)
router.get('/:id', traceabilityById)
module.exports = router;