const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {division, team} = require('../../database/controllers/');

const getDivisions = (req, res, next)=>{
    division
        .getDivisions()
        .then(data=>res.status(200).json(data))
        .catch(next)    
}
const getDivision = (req, res, next)=>{
    division 
        .getDivision(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(next)   
}






const newDivision = (req, res, next)=>{
    res.redirect('/')
}

const replaceDivision = (req, res, next)=>{
    res.redirect('/')
}

const updateDivision = (req, res, next)=>{
    res.redirect('/')
}

const deleteDivision = (req, res, next)=>{
    res.redirect('/')
}

const newFixtureList = async (req, res, next)=>{
    division
        .createFixtureList(req.params.id)
        .then(fixturelist=> res.json(fixturelist))
    
}

router.use((req, res, next)=>{
    console.log("Division route middleware stub")
    next()
})

router.get('/', publicArea, getDivisions);
router.get('/:id/newfixturelist', publicArea, newFixtureList);
router.get('/:id', publicArea, getDivision);
router.post('/', privateArea, newDivision);
router.put('/:id', privateArea, replaceDivision);
router.patch('/:id', privateArea, updateDivision);
router.delete('/:id', privateArea, deleteDivision);


module.exports = router;