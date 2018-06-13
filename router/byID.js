const express = require('express');
const {publicArea, privateArea} = require('../auth/authorisation');
const router = express.Router();

const action = (req,res)=>{
    endpoint[req.method](req,res)
}

router.get('/:collection/:id', publicArea, action);
router.post('/:collection/:id', privateArea, action);
router.put('/:collection/:id', privateArea, action);
router.patch('/:collection/:id', privateArea, action);
router.delete('/:collection/:id', privateArea, action);

router.get('/', publicArea, (req,res)=>{
    res.json({title:"League Manager"});
});

const endpoint = {
    GET: (req,res)=>{
        console.log("Get from " + req.params.collection +" using ID: " + req.params.id);
        res.json({success:true, collection:req.params.collection, id:req.params.id});
    },
    POST: (req,res)=>{
        console.log("Post to " + req.params.collection +" using ID: " + req.params.id);
        res.json({success:true, collection:req.params.collection, id:req.params.id});
    },
    PUT: (req,res)=>{
        console.log("Put to " + req.params.collection +" using ID: " + req.params.id);
        res.json({success:true, collection:req.params.collection, id:req.params.id});
    },
    PATCH: (req,res)=>{
        console.log("Patch to " + req.params.collection +" using ID: " + req.params.id);
        res.json({success:true, collection:req.params.collection, id:req.params.id});
    },
    DELETE: (req,res)=>{
        console.log("Delete from " + req.params.collection +" using ID: " + req.params.id);
        res.json({success:true, collection:req.params.collection, id:req.params.id});
    }
}

module.exports = router;