const {Sequelize} = require('sequelize')

const db = new Sequelize({
    host: 'enlazo.com.co',
    database: 'u420899468_enlazo',
    username: 'u420899468_34enlazo34',
    password: 'fTehdCm4&L',
    dialect: 'postgres',
    port: 5432
})
module.exports = db;
