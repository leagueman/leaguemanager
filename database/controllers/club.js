const { club } = require('../models/')

    
module.exports = {
    find: ()=>(
        club
            .find({})
            .populate({ path: 'venue' })
            .populate({ path: 'teams' })
            .populate({ path: 'organisation' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting clubs"}))
    ),

    findById: (id)=>(
        club
            .findById(id)
            .populate({ path: 'venue' })
            .populate({ path: 'teams' })
            .populate({ path: 'organisation' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:err}))
    ),

}