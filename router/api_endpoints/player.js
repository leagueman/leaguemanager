const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {Player} = require('../../database/');

const getPlayers = (req,res)=>{
    // Player.find({})
    //     .then(players=>res.send(players))
    //     .catch(err=>res.send({error:true, message:"Error getting players"}))
    res.send({})
}
const getPlayer = (req,res)=>{
    // Player.findById(req.params.id)
    //     .then(player=>res.send(player))
    //     .catch(err=>res.send({error:true, message:"Error getting player"}))
    res.send({})
}

const newPlayer = (req,res, next)=>{
    res.redirect('/')
    next()
}

const replacePlayer = (req,res)=>{
    res.redirect('/')
}

const updatePlayer = (req,res)=>{
    res.redirect('/')
}

const deletePlayer = (req,res)=>{
    res.redirect('/')
}


router.get('/', publicArea, getPlayers);
router.get('/:id', publicArea, getPlayer);
router.post('/', privateArea, newPlayer);
router.put('/:id', privateArea, replacePlayer);
router.patch('/:id', privateArea, updatePlayer);
router.delete('/:id', privateArea, deletePlayer);

module.exports = router;