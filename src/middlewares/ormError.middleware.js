const {
  ValidationError,
  DatabaseError,
  ConnectionError,
  ConnectionAcquireTimeoutError,
  ConnectionRefusedError,
  ConnectionTimedOutError,
  InvalidConnectionError
} = require("sequelize");

const ormError = (err, req, res, next)=>{
    if(
        err instanceof ConnectionError ||
        err instanceof ConnectionAcquireTimeoutError ||
        err instanceof ConnectionRefusedError ||
        err instanceof ConnectionTimedOutError ||
        err instanceof InvalidConnectionError
    ){
        return res.status(409).json({
            name: err.name,
            message: 'Database connecction error'
        })
    }
    else if (err instanceof ValidationError){
        return res.status(400).json({
            name: err.name,
            message: 'Database connecction error',
            errors: err.errors
        })
    }
    else if(err instanceof DatabaseError){
        return res.status(409).json({
            name: err.name,
            message: 'Database connecction error',
            errors: err.errors
        })
    }
    next()
}
module.exports= ormError