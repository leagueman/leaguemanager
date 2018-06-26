const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {player} = require('../../database/controllers/');

const getPlayers = (req, res, next)=>{
    res.redirect('/')
}
const getPlayer = (req, res, next)=>{
    res.redirect('/')
}




const newPlayer = (req, res, next)=>{
    res.redirect('/')
}

const replacePlayer = (req, res, next)=>{
    res.redirect('/')
}

const updatePlayer = (req, res, next)=>{
    res.redirect('/')
}

const deletePlayer = (req, res, next)=>{
    res.redirect('/')
}

router.use((req,res,next)=>{
    console.log("Player route middleware stub")
    next()
})

router.get('/', publicArea, getPlayers);
router.get('/:id', publicArea, getPlayer);
router.post('/', privateArea, newPlayer);
router.put('/:id', privateArea, replacePlayer);
router.patch('/:id', privateArea, updatePlayer);
router.delete('/:id', privateArea, deletePlayer);

module.exports = router;