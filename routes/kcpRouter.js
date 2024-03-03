const Router = require('express')
const router = new Router()
const kcpController = require('../Controllers/kcpController')//импортируем контроллер

router.get('/', kcpController.getAll)

module.exports = router