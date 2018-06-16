const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {Referee} = require('../../database/');

const getReferees = (req,res)=>{
    // Referee.find({})
    //     .then(referees=>res.send(referees))
    //     .catch(err=>res.send({error:true, message:"Error getting referees"}))
    res.send({})
}
const getReferee = (req,res)=>{
    // Referee.findById(req.params.id)
    //     .then(referee=>res.send(referee))
    //     .catch(err=>res.send({error:true, message:"Error getting referee"}))
    res.send({})
}

const newReferee = (req,res, next)=>{
    res.redirect('/')
    next()
}

const replaceReferee = (req,res)=>{
    res.redirect('/')
}

const updateReferee = (req,res)=>{
    res.redirect('/')
}

const deleteReferee = (req,res)=>{
    res.redirect('/')
}


router.get('/', publicArea, getReferees);
router.get('/:id', publicArea, getReferee);
router.post('/', privateArea, newReferee);
router.put('/:id', privateArea, replaceReferee);
router.patch('/:id', privateArea, updateReferee);
router.delete('/:id', privateArea, deleteReferee);

module.exports = router;