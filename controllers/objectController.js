const {object}  = require('../model/models')
const ApiError = require('../error/ApiError')

class objectController{
    //функция создания

    async getAll(req,res){
        const Object = await object.findAll()
        return res.json(Object)
    }
}

module.exports = new objectController()
