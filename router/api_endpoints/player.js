const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {player} = require('../../database/controllers/');

const getPlayers = (req,res)=>{
    res.redirect('/')
}
const getPlayer = (req,res)=>{
    res.redirect('/')
}




const newPlayer = (req,res)=>{
    res.redirect('/')
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