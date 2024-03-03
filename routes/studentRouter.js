const Router = require('express')
const router = new Router()
const studentController = require('../Controllers/studentController')//импортируем контроллер

router.get('/', studentController.getAll)

module.exports = router