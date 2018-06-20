const { team } = require('../models/')

    
module.exports = {
    find: ()=>(
        team
            .find({})
            .populate({ path: 'division' })
            .populate({ path: 'club' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting teams"}))
    ),

    findById: (id)=>(
        team
            .findById(id)
            .populate({ path: 'division' })
            .populate({ path: 'club' })
            .populate({ path: 'players' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:err}))
    ),

}