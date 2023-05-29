const {check} = require('express-validator')
const validateResult = require('../middlewares/validate.middleware')

const createCategoriesValidator = [
    check('category', 'Errores de categorías')
    .exists().withMessage('No estás enviando la categoría')
    .notEmpty().withMessage('El nombre de la categoría no puede estar vacío')
    .isString().withMessage('La categoría debe ser un string')
    .isLength({min: 7, max: 50}).withMessage('Mínimo 7 caracteres, máximo 50'),
    check('description', 'Error en la descripción')
    .exists().withMessage('No estás enviando descripción')
    .notEmpty().withMessage('No puede estar vacía')
    .isString().withMessage('Debe ser un string')
    .isLength({min: 10}).withMessage('Mínimo 10 caracteres'),
    validateResult
]
module.exports = {createCategoriesValidator}