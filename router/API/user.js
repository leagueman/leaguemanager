const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {user} = require('../../database/controllers/');


const signin = (req,res)=>{
    user
        .signin(req.body)
        // .then(data=>res.status(200).json(data))
        .then(data=>{
            res.cookie('token', data.token)
            if(!req.xhr){
                if(data.is_admin) res.redirect('/dashboard/admin?token='+data.token)
                else if(data.is_club_official) res.redirect('/dashboard/club?token='+data.token)
                else{
                    res.redirect('/myteam')
                } 
            }else{
                res.status(200).json(data.token)
                // res.redirect('/myteam?token='+data.token)
            }
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
    if(req.user && req.user.is_admin){
        user
            .find({})
            .then(users=>res.status(200).json(users))
            .catch(err=>res.status(200).json({error:true, message:"Error getting users"}))
    }else{
        res.status(200).json({error:true, message:"Not Authorised to view this data"})
    }
}
const getUser = (req,res)=>{
        user
            .getUser(req.params.id)
            .then(users=>res.status(200).json(users))
            .catch(err=>res.status(200).json({error:true, message:"Error getting user"}))
}

const updateUser = (req,res)=>{
    console.log(req.query)
    user
        .updateUser(req.user._id, req.body)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))   
}


const replaceUser = (req,res)=>{
    res.redirect('/')
}


const deleteUser = (req,res)=>{
    res.redirect('/')
}

const setTeam = (req,res)=>{
    user
        .updateUser(req.user._id, {team:req.query.team})
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))   
}

router.get('/', privateArea, getUsers);
router.get('/:id', privateArea, getUser);
router.get('/setteam', privateArea, setTeam);
router.post('/', publicArea, signup);
router.post('/signin', publicArea, signin);

router.patch('/:id', privateArea, updateUser);

//TO DO
router.put('/:id', privateArea, replaceUser);
router.delete('/:id', privateArea, deleteUser);

router.use((req, res, next)=>{
    res.json({});
})
module.exports = router;


