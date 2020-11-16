const router = require('express').Router()
const controller = require('../controllers/userController')

router.get('/', controller.getUser)

router.post('/add', controller.addNewUser)

module.exports = router