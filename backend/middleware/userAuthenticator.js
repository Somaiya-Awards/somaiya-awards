const asyncHandler = require("express-async-handler");

const userAuthenticator = asyncHandler( async (req,res,next)=>{
    console.log('user_id '.req.headers['user_id']);
    console.log('token '.req.headers['x-access-token']);
    const token = req.headers['x-access-token']
    const user_id = req.headers['user_id']

    res.status(401).json({
            message:' user_id'+user_id+'token '+token
        })
    
    
    
    next()
} )


module.exports = userAuthenticator