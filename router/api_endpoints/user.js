const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {User} = require('../../database/');


const signin = (req,res)=>{
    let {email, password} = req.body
    User.findOne({email:email})
        .then(user=>!user ? res.status(200).json({error:true, message:"Cannot find email"}) : user)
        .then(user=>user.password===password ? user : null)
        .then(user=>{
            res.status(200).json({
            success: true,
            token: createToken({
                sessionData: user,
                maxAge: 3600
              })
            })
            //TO-DO
            //UPDATE last_signin
        })
        .catch(err=>res.status(200).json({error:true, message:"Error getting users"}))
}

const signup = (req,res)=>{
    let {email, password1, password2} = req.body
    if(password1===password2){
        req.body.passord = req.body.passord1
        newUser(req,res)
    }
    else res.status(500).json({success:false, message:"Passwords didn't match"})
}

const getUsers = (req,res)=>{
    User.find({})
        .then(users=>res.status(200).json(users))
        .catch(err=>res.status(200).json({error:true, message:"Error getting users"}))
}
const getUser = (req,res)=>{
    User.findById(req.params.id)
        .then(user=>res.send(user))
        .catch(err=>res.send({error:true, message:"Error getting user"}))
}

const newUser = (req,res)=>{
    var NEW_USER = new User({ name: req.body.name, email: req.body.email, password:req.body.password})
        .save()
        .then(result=>{
            res.status(201).json(result);
        })
        .catch(err=>{
            console.log(err)
            res.status(400).json({error:err});
        })    
}

const replaceUser = (req,res)=>{
    res.redirect('/')
}

const updateUser = (req,res)=>{
    res.redirect('/')
}

const deleteUser = (req,res)=>{
    res.redirect('/')
}


router.get('/', publicArea, getUsers);
router.get('/:id', publicArea, getUser);
router.post('/', privateArea, newUser);
router.post('/signin', privateArea, signin);
router.put('/:id', privateArea, replaceUser);
router.patch('/:id', privateArea, updateUser);
router.delete('/:id', privateArea, deleteUser);

module.exports = router;