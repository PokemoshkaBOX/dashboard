const {credited}  = require('../models/models')
const ApiError = require('../error/ApiError')

class creditedController{
    //функция создания

    async getAll(req,res){
        const Credited = await credited.findAll()
        return res.json(Credited)
    }
}

module.exports = new creditedController()