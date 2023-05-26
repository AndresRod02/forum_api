const postRoutes = require('./posts.routes')
const userRoutes = require('./users.routes')

const apiRoutes = (app) =>{
    app.use(postRoutes)
    app.use(userRoutes) 
}
module.exports = apiRoutes