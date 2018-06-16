const jwt = require('jsonwebtoken');

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
    let token = req.method==='POST' ? req.body.token : req.query.token
    jwt.verify(token, process.env.SECRET_CODE, (err, decodedToken) =>{
        if (err || !decodedToken) res.status(400).json({message: "Invalid auth token provided."})
        else{
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