const postRoutes = require('./posts.routes')
const userRoutes = require('./users.routes')
const categoriesRoutes = require('./categories.routes')
const answersRoutes = require('./answers.routes')

const apiRoutes = (app) =>{
    app.use(postRoutes)
    app.use(userRoutes)
    app.use(categoriesRoutes) 
    app.use(answersRoutes) 
}
module.exports = apiRoutes