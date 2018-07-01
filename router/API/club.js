const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {club, user, team} = require('../../database/controllers');

const getClubs = (req, res, next)=>{
    club
        .getClubs()
        .then(data=>res.status(200).json(data))
        .catch(next)    
}
const getClub = (req, res, next)=>{
    club
        .getClub(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(next)    
}

const getClubOfficials = (req, res, next)=>{
    user
        .getUsers({club:req.params.id, is_club_official:true})
        .then(data=>res.status(200).json(data))
        .catch(next)    
}

const newClub = (req, res, next)=>{
    club
        .newClub(req.body)
        .then(data=>res.status(200).json(data))
        .catch(next)    
}

const replaceClub = (req, res, next)=>{
    club
        .replaceClub(req.body._id, req.body)
        .then(data=>res.status(200).json(data))
        .catch(next)   
}

const updateClub = (req, res, next)=>{
    club
        .updateClub(req.body._id, req.body)
        .then(data=>res.status(200).json(data))
        .catch(next)   
}

const deleteClub = (req, res, next)=>{
    res.redirect('/')
}

router.use((req, res, next)=>{
    console.log("Club route middleware stub")
    next()
})

router.get('/', publicArea, getClubs);
router.get('/:id', privateArea, getClub);
router.get('/:id/officials', publicArea, getClubOfficials);
router.post('/', publicArea, newClub);
router.put('/:id', privateArea, replaceClub);
router.patch('/:id', privateArea, updateClub);
router.delete('/:id', privateArea, deleteClub);

module.exports = router;