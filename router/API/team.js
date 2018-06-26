const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {team} = require('../../database/controllers/');

const getTeams = (req, res, next)=>{
    team
        .getTeams()
        .then(data=>res.status(200).json(data))
        .catch(next)    
}
const getTeam = (req, res, next)=>{
    team
        .getTeam(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(next)    
}

// const getTeamFixtures = (req, res, next)=>{
//     team
//         .getTeamFixtures(req.params.id)
//         .then(data=>res.status(200).json(data))
//         .catch(next)    
// }


const newTeam = (req, res, next)=>{
    team
        .newTeam(req.body)
        .then(data=>res.status(200).json(data))
        .catch(next)    
}

const replaceTeam = (req, res, next)=>{
    res.redirect('/')
}

const updateTeam = (req, res, next)=>{
    res.redirect('/')
}

const deleteTeam = (req, res, next)=>{
    res.redirect('/')
}


router.use((req,res,next)=>{
    console.log("Team route middleware stub")
    next()
})

router.get('/', publicArea, getTeams);
router.get('/:id', publicArea, getTeam);
// router.get('/:id/fixtures', publicArea, getTeamFixtures);
router.post('/', publicArea, newTeam);
router.put('/:id', publicArea, replaceTeam);
router.patch('/:id', publicArea, updateTeam);
router.delete('/:id', publicArea, deleteTeam);

module.exports = router;