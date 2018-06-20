const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const createToken = details=>(
    jwt.sign(
        {data: details.sessionData}, 
        process.env.SECRET_CODE, 
        {
            expiresIn: details.maxAge || 3600,
            algorithm: 'HS256'
        }
    )
)


const apiVerification =  (req,res,next)=>{
    console.log("API view - No verification necessary");
    next()
};

const viewVerification = (req,res,next)=>{
    console.log("Regular view - No verification necessary");
    next();
};

const publicArea = (req,res,next)=>{
    console.log("Public Area Accessed");
    next();
};

const privateArea = (req,res,next)=>{
    console.log("Private Area Accessed");
    let token = req.method==='POST' ? req.body.token : (req.query.token || req.headers['x-access-token'] || null)
    jwt.verify(token, process.env.SECRET_CODE, (err, decodedToken) =>{
        if (err || !decodedToken) res.status(400).json({message: "Invalid authorisation token provided."})
        else{
            console.log("decodedToken", decodedToken)
            req.user = decodedToken
            next()
        }
    })
};

module.exports = {
    createToken,
    apiVerification,
    viewVerification,
    publicArea,
    privateArea
};