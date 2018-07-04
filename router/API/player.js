const express = require('express');
const router = express.Router();
const { Authenticate, isClubOfficial } = require('../../auth/passport');
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

router.get('/', getPlayers);
router.get('/:id', getPlayer);
router.post('/', Authenticate, isClubOfficial, newPlayer);
router.put('/:id', Authenticate, isClubOfficial, replacePlayer);
router.patch('/:id', Authenticate, isClubOfficial, updatePlayer);
router.delete('/:id', Authenticate, isClubOfficial, deletePlayer);

module.exports = router;