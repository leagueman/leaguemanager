const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

const createToken = data=>(
    jwt.sign(
        {data: data.payload}, 
        process.env.SECRET_CODE, 
        {
            expiresIn: '3h',
            algorithm: 'HS256'
        }
    )
)
const getToken = (req)=>req.cookies.token || req.body.token || req.query.token || req.headers['x-access-token'] || null

const checkToken = (req, cb)=>{
    let token = getToken(req)
    console.log(token)
    if(token){
        jwt.verify(token, process.env.SECRET_CODE, (err, decodedToken) =>{
            console.log("Verifying Token")
            if (err) cb({error:true, message:err})
            // console.log(decodedToken)
            if (!decodedToken) cb({error:true, message:"Couldn't decode the provided token"}) 
            else cb({decodedToken}) 
        })
    }else{
        cb({error:true, message:"Not a valid token"}) 
    }
}

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
    checkToken(req, result=>{
        if(result && !result.error && result.decodedToken) req.user = result.decodedToken.data 
        next();
    })
};

const privateArea = (req,res,next)=>{
    console.log("Private Area Accessed");
    checkToken(req, result=>{
        if(result && result.error){
            res.status(400).json({message: "Invalid authorisation token provided."})
        }else if(result && result.decodedToken) {
            req.user = result.decodedToken.data
            next()
        }
    })
           
};

const alreadySignedIn = (req, res, next)=>{    
    checkToken(req, result=>{
        if(result.error) next()
        else res.redirect('/myteam') 
    })
}

module.exports = {
    createToken,
    apiVerification,
    viewVerification,
    publicArea,
    privateArea,
    alreadySignedIn,
    getToken,
};