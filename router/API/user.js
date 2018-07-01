const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {user} = require('../../database/controllers/');


const signin = (req, res, next)=>{
    user
        .signin(req.body)
        .then(data=>{
            if(data.error) throw data.message
            else return data
        })
        .then(data=>{
            res.cookie('token', data.token)
            // if(!req.xhr){
            //     if(data.is_admin) res.redirect('/dashboard/admin?token='+data.token)
            //     else if(data.is_club_official) res.redirect('/dashboard/club?token='+data.token)
            //     else{
            //         res.redirect('/myteam')
            //     } 
            // }else{
                res.status(200).json(data)
            // }
        })
        .catch(next)

}

const signup = (req, res, next)=>{
    console.log(req.body)
    user    
        .signup(req.body)
        .then(data=>res.status(200).json(data))
        .catch(next)
}

const getUsers = (req, res, next)=>{

    //THIS LOGIC SHOULD BE HANDLED BY A MIDDLEWARE
    // this should also crewate a query based on the user type (admin, club official, etc)
    if(req.user && req.user.isAdmin){
        user
            .getUsers({})
            .then(users=>res.status(200).json(users))
            .catch(next)
    }else{
        res.status(200).json({error:true, message:"Not Authorised to view this data"})
    }
}
const getUser = (req, res, next)=>{
        user
            .getUser(req.params.id)
            .then(users=>res.status(200).json(users))
            .catch(next)
}

const updateUser = (req, res, next)=>{
    console.log(req.query)
    user
        .updateUser(req.user._id, req.body)
        .then(data=>res.status(200).json(data))
        .catch(next)   
}


const replaceUser = (req, res, next)=>{
    res.redirect('/')
}


const deleteUser = (req, res, next)=>{
    res.redirect('/')
}

const setTeam = (req, res, next)=>{
    user
        .updateUser(req.user._id, {team:req.query.team})
        .then(data=>res.status(200).json(data))
        .catch(next)   
}


router.use((req,res,next)=>{
    console.log("User route middleware stub")
    next()
})

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


