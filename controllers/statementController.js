const {statement}  = require('../model/models')
const ApiError = require('../error/ApiError')

class statementController{

    async getAll(req,res){
        const Statement = await statement.findAll()
        return res.json(Statement)
    }
}

module.exports = new statementController()
