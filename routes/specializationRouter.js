const Router = require('express')
const router = new Router()
const specializationController = require('../controllers/specializationController')//импортируем контроллер

router.get('/', specializationController.getAll)

module.exports = router
