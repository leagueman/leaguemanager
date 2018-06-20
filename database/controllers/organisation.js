const { organisation } = require('../models/')

    
module.exports = {
    find: ()=>(
        organisation
            .find({})
            .populate({ path: 'clubs' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting organisations"}))
    ),

    findById: (id)=>(
        organisation
            .findById(id)
            .populate({ path: 'clubs' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:err}))
    ),

}