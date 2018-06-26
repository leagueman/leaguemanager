const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {competition, league, division} = require('../../database/controllers/');

const getCompetitions = (req, res, next)=>{
    competition
        .getCompetitions({})
        .then(data=>res.status(200).json(data))
        .catch(next)    
}

const getCompetition = (req, res, next)=>{
    competition 
        .getCompetition(req.params.id)
        .then(data=> res.status(200).json(data) )
        .catch(next)    
}

// TO-DO - MOVE THIS LOGIC TO THE CONTROLLER 
const newCompetition = (req, res, next)=>{
    competition
        .newCompetition(req.body)
        .then(new_competition=>{
            req.body.competition = new_competition._id
            if(req.body.type==='league') {
                league
                    .newLeague(req.body)
                    .then(new_league=>{
                        new_competition.league = new_league
                        let divisions = []
                        for(let i=1; i<=req.body.divisions; i++){
                            let division_details = {
                                title : "Division "+ String.fromCharCode(64+i),
                                rank: i,
                                league: new_league._id
                            }
                            divisions.push(division.newDivision(division_details))
                        }
                        Promise.all(divisions).then(new_divisions=>{
                            new_competition.league.divisions = new_divisions
                            res.status(200).json(new_competition)
                        })
                        .catch(err=>res.status(500).json({error:true, message:"Error creating divisions"}))                       
                    })
                    .catch(err=>res.status(500).json({error:true, message:"Error creating league"}))
            }else if(req.body.type==='cup'){

            }else if(req.body.type==='championship'){

            }else{
                res.status(200).json(new_competition)
            }
            
        })
        .catch(next)    
}

const replaceCompetition = (req, res, next)=>{
    res.redirect('/')
}

const updateCompetition = (req, res, next)=>{
    res.redirect('/')
}

const deleteCompetition = (req, res, next)=>{
    res.redirect('/')
}

router.use((req, res, next)=>{
    console.log("Competition route middleware stub")
    next()
})

router.get('/', publicArea, getCompetitions);
router.get('/:id', publicArea, getCompetition);
router.post('/', publicArea, newCompetition);
router.put('/:id', privateArea, replaceCompetition);
router.patch('/:id', privateArea, updateCompetition);
router.delete('/:id', privateArea, deleteCompetition);

module.exports = router;