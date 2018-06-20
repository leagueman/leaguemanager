const { league } = require('../models/')

    
module.exports = {
    find: ()=>(
        league.find({})
            .populate({path: 'divisions'})
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting leagues"}))
    ),

    findById: (id)=>(
        league.findById(id)
            .populate({path: 'divisions', populate: { path: 'teams' }})
            .then(data=>data)
            .catch(err=>console.log({error:true, message:err}))
    )
}