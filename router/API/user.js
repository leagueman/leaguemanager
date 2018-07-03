const express = require('express');
const router = express.Router();
const { Authenticate, isAdmin } = require('../../auth/passport');

const {user} = require('../../database/controllers/');


const getUsers = (req, res)=>{
    console.log("got to API")
    user
        .getUsers({})
        .then(users=>res.status(200).json(users))
        .catch(err=>console.log(err))

}
const getUser = (req, res, next)=>{
    user
        .getUser(req.params.id)
        .then(users=>res.status(200).json(users))
        .catch(next)
}

const updateUser = (req, res, next)=>{
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

router.get('/', Authenticate, isAdmin, getUsers);
router.get('/:id', getUser);
router.get('/setteam', setTeam);

router.patch('/:id', updateUser);

//TO DO
router.put('/:id', replaceUser);
router.delete('/:id', deleteUser);

router.use((req, res, next)=>{
    res.json({});
})
module.exports = router;


