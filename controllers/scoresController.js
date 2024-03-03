const {scores}  = require('../models/models')
const ApiError = require('../error/ApiError')

class scoresController{
    //функция создания
    async getAll(req,res){
        const Scores = await scores.findAll()
        return res.json(Scores)
    }
}

module.exports = new scoresController()