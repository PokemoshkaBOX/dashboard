const Router = require('express')
const router = new Router()
const objectController = require('../Controllers/objectController')//импортируем контроллер

router.get('/', objectController.getAll)

module.exports = router