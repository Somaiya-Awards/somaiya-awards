const asyncHandler = require("express-async-handler");

const userAuthenticator = asyncHandler( async (req,res,next)=>{
    console.log('user_id '.req.headers['user_id']);
    console.log('token '.req.headers['x-access-token']);
    const token = req.headers['x-access-token']
    const user_id = req.headers['user_id']

    res.status(401).json({
            message:' user_id'+user_id+'token '+token
        })
    
    /**if something breaks remove this if statement due to token or userID while TESTING */
    if(!token || !user_id){
        res.status(401).json({
            message:'Missing token and id'
        })
    }
    /**till here */
    
    res.token = token
    res.user_id = user_id
    
    next()
} )


module.exports = userAuthenticator