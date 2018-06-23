const { competition } = require('../models/')
const league = require('./league')

const aggregate = async data=>{
    if(data.type==="league"){ 
        data.league = await league.findLeague({competition:data._id}) 
        return data
    }else if(data.type==="cup"){ 
    }else if(data.type==="championship"){ 
    }
    return data
}

module.exports = {
    getCompetitions: (criteria={})=>(
        competition
            .find(criteria)
            .populate({ path: 'league' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting competitions"}))
    ),

    getCompetition: (id)=>(
        competition
            .findById(id)
            .then(aggregate)
            .catch(err=>console.log({error:true, message:err}))
    ),

    newCompetition: ({title, type, organisation})=>(
         new competition({
                    title, 
                    type,
                    organisation,
                })
                .save()
                .then(result=>result)
                .catch(err=>console.log({error:true, message:"Error creating team"}))
    ),

}