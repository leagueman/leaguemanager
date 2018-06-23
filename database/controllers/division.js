const { division } = require('../models/')
const team = require('./team')
const table = require('./table')

const aggregate = async data=>{
    data.teams = await team.getTeams({division:data._id})
    data.table = await table.findTable({division:data._id})
    
    return data
}

module.exports = {
    getDivisions: (criteria={})=>(
        division.find(criteria)
            .populate({ path: 'league' })
            .populate({ path: 'teams' })
            .populate({ path: 'table' , select:'table' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting divivions"}))
    ),

    getDivision: (id)=>(
        division.findById(id)
            .populate({ path: 'league' , select:'title'})
            .then(aggregate)
            .catch(err=>console.log({error:true, message:err}))
    ),

    findDivision: (criteria={})=>(
        division.findOne(criteria)
        .populate({ path: 'league' , select:'title'})
        .then(aggregate)
        .catch(err=>console.log({error:true, message:err}))
    ),

    newDivision: ({title, rank, league})=>(
        new division({
                    title, 
                    rank,
                    league,
                })
                .save()
                .then(result=>result)
                .catch(err=>console.log({error:true, message:"Error creating team"}))
    ),
    
}