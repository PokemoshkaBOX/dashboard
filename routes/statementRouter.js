const Router = require('express')
const router = new Router()
const statementController = require('../Controllers/statementController')//импортируем контроллер

router.get('/', statementController.getAll)

module.exports = router