const express = require('express');
const router = express.Router();
const {Authenticate} = require('../../auth/passport');
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

router.get('/', getDivisions);
router.get('/:id/newfixturelist', newFixtureList);
router.get('/:id', getDivision);
router.post('/', Authenticate, newDivision);
router.put('/:id', Authenticate, replaceDivision);
router.patch('/:id', Authenticate, updateDivision);
router.delete('/:id', Authenticate, deleteDivision);


module.exports = router;