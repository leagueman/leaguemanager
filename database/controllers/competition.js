const { competition } = require('../models/')

    
module.exports = {
    find: ()=>(
        competition
            .find({})
            .populate({ path: 'league' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting competitions"}))
    ),

    findById: (id)=>(
        competition
            .findById(id)
            .populate({ path: 'league', populate: { path: 'divisions' } })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:err}))
    ),

}