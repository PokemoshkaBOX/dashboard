const Router = require('express')
const router = new Router()
const specializationController = require('../Controllers/specializationController')//импортируем контроллер

router.get('/', specializationController.getAll)

module.exports = router