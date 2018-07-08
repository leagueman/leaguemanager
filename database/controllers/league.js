const { league } = require('../models/')
const division = require('./division')

const aggregate =  async data=>{
    data.divisions = await division.getDivisions({league:data._id})
    return data
}
    
module.exports = {
    getLeagues: (criteria={})=>(
        league.find(criteria)
            .populate({path: 'divisions'})
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting leagues"}))
    ),

    getLeague: (id)=>(
        league.findById(id)
            .populate({path: 'divisions', populate: { path: 'teams' }})
            .then(aggregate)
            .catch(err=>console.log({error:true, message:err}))
    ),

    findLeague: (criteria)=>(
        league.findOne(criteria)
            .then(aggregate)
            .catch(err=>console.log({error:true, message:err}))
    ),

    newLeague: (body)=>(
        new league(body)
                .save()
                .then(result=>result)
                .catch(err=>console.error(err))
    ),

}