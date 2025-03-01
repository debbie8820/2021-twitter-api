const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')
const helpers = require('../_helpers')

router.post('/signin', adminController.signin)

router.use(helpers.authenticated)

router.get('/main', adminController.getAllTweet)

router.get('/users', adminController.getAllUser)

router.delete('/tweets/:id', adminController.deleteTweet)


module.exports = router