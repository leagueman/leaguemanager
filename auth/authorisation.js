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
    next();
};

module.exports = {
    apiVerification,
    viewVerification,
    publicArea,
    privateArea
};