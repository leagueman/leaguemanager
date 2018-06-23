const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {division} = require('../../database/controllers/');

const getDivisions = (req,res)=>{
    division
        .getDivisions()
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}
const getDivision = (req,res)=>{
    division 
        .getDivision(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))   
}






const newDivision = (req,res)=>{
    res.redirect('/')
}

const replaceDivision = (req,res)=>{
    res.redirect('/')
}

const updateDivision = (req,res)=>{
    res.redirect('/')
}

const deleteDivision = (req,res)=>{
    res.redirect('/')
}



router.get('/', publicArea, getDivisions);
router.get('/:id', publicArea, getDivision);
router.post('/', privateArea, newDivision);
router.put('/:id', privateArea, replaceDivision);
router.patch('/:id', privateArea, updateDivision);
router.delete('/:id', privateArea, deleteDivision);
module.exports = router;