const express = require('express');
const router = express.Router();
const {publicArea, privateArea} = require('../../auth/authorisation');
const {table} = require('../../database/controllers/');

const getTables = (req,res)=>{
    table
        .find()
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}
const getTable = (req,res)=>{
    table
        .findById(req.params.id)
        .then(data=>res.status(200).json(data))
        .catch(err=>res.status(500).json({error:true, message:err}))    
}




const newTable = (req,res)=>{
    res.redirect('/')
}

const replaceTable = (req,res)=>{
    res.redirect('/')
}

const updateTable = (req,res)=>{
    res.redirect('/')
}

const deleteTable = (req,res)=>{
    res.redirect('/')
}


router.get('/', publicArea, getTables);
router.get('/:id', publicArea, getTable);
router.post('/', privateArea, newTable);
router.put('/:id', privateArea, replaceTable);
router.patch('/:id', privateArea, updateTable);
router.delete('/:id', privateArea, deleteTable);

module.exports = router;