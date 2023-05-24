const {check} = require('express-validator')
const validateResult = require('../middlewares/validate.middleware')
const createUserValidator = [
    check("username", "Error en el campo username")
        .exists()
        .notEmpty()
        .isString()
        .isLength({min: 6, max: 30}).withMessage('No debe ser inferior a 6 caracteres'),
    check("email", "Error en email")
        .exists()
        .notEmpty()
        .isString()
        .isEmail()
        // incluir siempre un mensaje de error
        .isLength({min: 7, max: 50}).withMessage('No debe ser inferior a 7 caracteres'),
    check("password", "Error en el campo de password")
        .exists()
        .notEmpty()
        .isString()
        .isLength({min: 7, max: 50}).withMessage('No debe ser inferior a 7 caracteres'),
    validateResult
];
const loginUserValidator = [
    check('email', 'Error en el campo email')
        .exists()
        .notEmpty()
        .isLength({min: 10, max: 50})
        .isEmail(),
    check('password', 'Error en el campo password')
        .exists()
        .notEmpty()
        .isString()
        .isLength({min: 8}),
    validateResult
]
module.exports = {
    createUserValidator,
    loginUserValidator
}