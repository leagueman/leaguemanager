const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {user} = require('../../database/controllers/');


const signin = (req,res)=>{
    user
        .signin(req.body)
        // .then(data=>res.status(200).json(data))
        .then(data=>{
            if(data.is_admin) res.redirect('/dashboard/admin?token='+data.token)
            if(data.is_club_official) res.redirect('/dashboard/club?token='+data.token)
        })
        .catch(err=>res.status(500).json({error:true, message:err}))

}

const signup = (req,res)=>{
    user    
        .signup(req.body)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))
}

const getUsers = (req,res)=>{
    user
        .find({})
        .then(users=>res.status(200).json(users))
        .catch(err=>res.status(200).json({error:true, message:"Error getting users"}))
}
const getUser = (req,res)=>{
    if(req.user.is_admin){
        user
            .findById(req.params.id)
            .then(users=>res.status(200).json(users))
            .catch(err=>res.status(200).json({error:true, message:"Error getting users"}))
    }else{
        res.status(200).json({error:true, message:"Not Authorised to view this data"})
    }
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
router.get('/:id', privateArea, getUser);
router.post('/', publicArea, signup);
router.post('/signin', publicArea, signin);

//TO DO
router.put('/:id', privateArea, replaceUser);
router.patch('/:id', privateArea, updateUser);
router.delete('/:id', privateArea, deleteUser);

module.exports = router;