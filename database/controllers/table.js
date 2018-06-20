const { table } = require('../models/')

    
module.exports = {
    find: ()=>(
        table
            .find({})
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting tables"}))
    ),

    findById: (id)=>(
        table
            .findById(id)
            .then(data=>data)
            .catch(err=>console.log({error:true, message:err}))
    ),

}