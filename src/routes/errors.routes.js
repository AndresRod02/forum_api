const errorHandler = require("./middlewares/errorHandler.middleware");
const logError = require("./middlewares/logError.middleware");
const ormError = require("./middlewares/ormError.middleware")

const errorsRoute=(app)=>{
    app.use(logError)
    app.use(ormError)
    app.use(errorHandler)
    app.use("*", (req, res)=>{
        res.status(404).json({
            message: 'Ruta no definida'
        })
    }) 
}

module.exports = errorsRoute