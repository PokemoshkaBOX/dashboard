const Router = require('express')
const router = new Router()
const locationController = require('../Controllers/locationController')//импортируем контроллер

router.get('/', locationController.getAll)


module.exports = router