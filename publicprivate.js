const publicArea = (req,res,next)=>{
    console.log("Public Area Accessed");
    next();
};

const privateArea = (req,res,next)=>{
    console.log("Private Area Accessed");
    next();
};