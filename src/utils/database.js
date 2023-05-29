const {Sequelize} = require('sequelize')

const db = new Sequelize({
    host: 'localhost',
    database: 'db_forum',
    username: 'postgres',
    password: 'root',
    dialect: 'postgres',
    port: 5432,
    logging: false
})
module.exports = db;
