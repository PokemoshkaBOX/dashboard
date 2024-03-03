const {institute}  = require('../models/models')
const ApiError = require('../error/ApiError')

class instituteController{
    //функция создания
    async getAll(req,res){
        const Institute = await institute.findAll()
        return res.json(Institute)
    }
}

module.exports = new instituteController()