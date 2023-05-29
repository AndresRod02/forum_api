
const hasRoles = (... roles) =>{
    return (req, res, next)=>{
        const {rolId} = req.user
        if(!roles.includes(rolId)){
            next({
                status: 401,
                name: 'Role required',
                message: `User has not required role`
            })
        }
        next()
    }
}
module.exports = {
    hasRoles
}