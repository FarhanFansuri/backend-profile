const express = require('express')
const router = express.Router()
const {
    getContactMany,
    getContactOne,
    postContact,
    putContact,
    deleteContact 
} = require('../controllers/contactControllers')



router.route('/contact')
    .get(getContactMany)
    .post(postContact)
    .delete(deleteContact) 
router.route('/contact/:id').get(getContactOne)
router.route('/contact/:id').put(putContact) 

module.exports = router
