const {specialization}  = require('../models/models')
const ApiError = require('../error/ApiError')

class specializationController{
    //функция создания
    async getAll(req,res){
        const Specialization = await specialization.findAll()
        return res.json(Specialization)
    }
}

module.exports = new specializationController()