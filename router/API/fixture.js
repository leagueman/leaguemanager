const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {fixture} = require('../../database/controllers/');

const getFixtures = (req, res, next)=>{
    fixture
        .getFixtures()
        .then(data=>res.status(200).json(data))
        .catch(next)
}   

const getFixture = (req, res, next)=>{
    fixture
        .getFixture(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(next)
}

const newFixture = (req, res, next)=>{
    res.redirect('/')
}

const replaceFixture = (req, res, next)=>{
    res.redirect('/')
}

const updateFixture = (req, res, next)=>{
    res.redirect('/')
}

const deleteFixture = (req, res, next)=>{
    res.redirect('/')
}

router.use((req, res, next)=>{
    console.log("fixture route middleware stub")
    next()
})

router.get('/', publicArea, getFixtures);
router.get('/:id', publicArea, getFixture);
router.post('/', privateArea, newFixture);
router.put('/:id', privateArea, replaceFixture);
router.patch('/:id', privateArea, updateFixture);
router.delete('/:id', privateArea, deleteFixture);

// router.get('/:property/:value', (req, res, next, next)=>{
//     if(!req.params.value) next()
//     console.log("DYNAMIC ROUTE")
//     fixture
//     .getFixtures({[req.params.property]:req.params.value})
//     .then(results=>res.json(results))
// })
module.exports = router;