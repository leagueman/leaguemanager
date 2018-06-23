const { table } = require('../models/')

    
module.exports = {
    getTables: (criteria={})=>(
        table
            .find(criteria)
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting tables"}))
    ),

    getTable: (id)=>(
        table
            .findById(id)
            .then(data=>data)
            .catch(err=>console.log({error:true, message:err}))
    ),

    findTable: (criteria={})=>(
        table
            .findOne(criteria)
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting tables"}))
    ),
}