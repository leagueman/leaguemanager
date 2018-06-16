const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {Fixture} = require('../../database/');

const getFixtures = (req,res)=>{
    // Fixture.find({})
    //     .then(fixtures=>res.send(fixtures))
    //     .catch(err=>res.send({error:true, message:"Error getting fixtures"}))
    res.send({})
}
const getFixture = (req,res)=>{
    // Fixture.findById(req.params.id)
    //     .then(fixture=>res.send(fixture))
    //     .catch(err=>res.send({error:true, message:"Error getting fixture"}))
    res.send({})
}

const newFixture = (req,res, next)=>{
    res.redirect('/')
    next()
}

const replaceFixture = (req,res)=>{
    res.redirect('/')
}

const updateFixture = (req,res)=>{
    res.redirect('/')
}

const deleteFixture = (req,res)=>{
    res.redirect('/')
}

router.get('/', publicArea, getFixtures);
router.get('/:id', publicArea, getFixture);
router.post('/', privateArea, newFixture);
router.put('/:id', privateArea, replaceFixture);
router.patch('/:id', privateArea, updateFixture);
router.delete('/:id', privateArea, deleteFixture);

module.exports = router;