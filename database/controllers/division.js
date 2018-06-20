const { division } = require('../models/')

    
module.exports = {
    find: ()=>(
        division.find({})
            .populate({ path: 'league' })
            .populate({ path: 'teams' })
            .populate({ path: 'table' , select:'table' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting divivions"}))
    ),

    findById: (id)=>(
        division.findById(id)
            .populate({ path: 'teams' , select:'title' })
            .populate({ path: 'table' , select:'table' })
            .populate({ path: 'league' , select:'title'})
            .then(data=>data)
            .catch(err=>console.log({error:true, message:err}))
    ),
    
}