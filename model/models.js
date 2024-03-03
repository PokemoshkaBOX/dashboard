const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const user = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const kcp = sequelize.define('kcp',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    code: {type: DataTypes.STRING},
    specialization: {type: DataTypes.STRING},
    numbers: {type: DataTypes.INTEGER},
})

const general = sequelize.define('general',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const student = sequelize.define('student',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    patronymic: {type: DataTypes.STRING, allowNull: true},
    birthday: {type: DataTypes.DATEONLY, allowNull: false},
})

const credited = sequelize.define('credited',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    credited: {type: DataTypes.BOOLEAN, unique: true, allowNull: false},
    withdrawn: {type: DataTypes.BOOLEAN, unique: true, allowNull: false},
} )

const statement = sequelize.define('statement', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    delivery_method: {type: DataTypes.STRING, allowNull: false},
    statement_type: {type: DataTypes.STRING, allowNull: false},
    statement_level: {type: DataTypes.STRING, allowNull: false},
    delivery_date: {type: DataTypes.STRING, allowNull: false},
    budget_universeBudget: {type: DataTypes.BOOLEAN, allowNull: false},
})

const institute = sequelize.define('institute', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    institute: {type: DataTypes.STRING, allowNull: false},
})

const specialization = sequelize.define('specialization', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    specialization: {type: DataTypes.STRING, allowNull: false},
})

const location = sequelize.define('location', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    country: {type: DataTypes.STRING, allowNull: false},
    region: {type: DataTypes.STRING, allowNull: false},
})

const scores = sequelize.define('scores', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    scores: {type: DataTypes.INTEGER, allowNull: false},
})

const object = sequelize.define('object', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    object: {type: DataTypes.INTEGER, allowNull: false},
})



user.hasMany(general)
general.belongsTo(user)

kcp.hasOne(general)
general.belongsTo(kcp)

student.hasMany(general)
general.belongsTo(student)

credited.hasOne(student)
student.belongsTo(credited)

statement.hasMany(student)
student.belongsTo(statement)

location.hasOne(student)
student.belongsTo(location)

scores.hasMany(student)
student.belongsTo(scores)

statement.hasOne(credited)
credited.belongsTo(statement)

institute.hasOne(statement)
statement.belongsTo(institute)

specialization.hasMany(institute)
institute.belongsTo(specialization)

object.hasMany(scores)
scores.belongsTo(object)

module.exports = {
    user,
    kcp,
    general,
    student,
    credited,
    statement,
    institute,
    specialization,
    location,
    scores,
    object,
}