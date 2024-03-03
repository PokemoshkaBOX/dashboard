const Router = require('express')
const router = new Router()
const instituteController = require('../Controllers/instituteController')//импортируем контроллер

router.get('/', instituteController.getAll)


module.exports = router