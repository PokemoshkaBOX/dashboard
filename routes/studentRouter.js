const Router = require('express')
const router = new Router()
const studentController = require('../controllers/studentController')//импортируем контроллер

router.get('/', studentController.getAll)

module.exports = router
