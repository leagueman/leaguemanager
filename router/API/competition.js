const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {competition, league, division} = require('../../database/controllers/');

const getCompetitions = (req,res)=>{
    competition
        .getCompetitions({})
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}

const getCompetition = (req,res)=>{
    competition 
        .getCompetition(req.params.id)
        .then(data=> res.status(200).json(data) )
        .catch(err=>res.status(500).json({error:true, message:err}))    
}

// TO-DO - MOVE THIS LOGIC TO THE CONTROLLER 
const newCompetition = (req,res)=>{
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
        .catch(err=>res.status(500).json({error:true, message:err}))    
}

const replaceCompetition = (req,res)=>{
    res.redirect('/')
}

const updateCompetition = (req,res)=>{
    res.redirect('/')
}

const deleteCompetition = (req,res)=>{
    res.redirect('/')
}


router.get('/', publicArea, getCompetitions);
router.get('/:id', publicArea, getCompetition);
router.post('/', publicArea, newCompetition);
router.put('/:id', privateArea, replaceCompetition);
router.patch('/:id', privateArea, updateCompetition);
router.delete('/:id', privateArea, deleteCompetition);

module.exports = router;