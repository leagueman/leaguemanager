const { fixture } = require('../models/')
const team = require('./team')
const venue = require('./venue')

const aggregate = async data=>{
    // data.home_team = await team.getTeam(data.home_team)
    // data.away_team = await team.getTeam(data.away_team)
    // data.venues = await venue.getVenues({fixture:data._id})
    return data
}


module.exports = {
    getFixtures: (criteria={})=>(
        fixture
            .find(criteria)
            .populate({ path: 'score' })
            .populate({ path: 'home_team' })
            .populate({ path: 'away_team' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting fixtures"}))
    ),

    getFixture: (id)=>(
        fixture
            .findById(id)
            .populate({ path: 'score' })
            .populate({ path: 'home_team' })
            .populate({ path: 'away_team' })
            .populate({ path: 'referee' })
            .populate({ path: 'time_slot' })
            .populate({ path: 'division' })
            .then(aggregate)
            .catch(err=>console.log({error:true, message:err}))
    ),
    
    findFixture: (criteria={})=>(
        fixture
            .findOne(criteria)
            .populate({ path: 'score' })
            .populate({ path: 'home_team' })
            .populate({ path: 'away_team' })
            .then(aggregate)
            .catch(err=>console.log({error:true, message:err}))
    ),




    updateFixture: async (id, data)=>{
        let Fixture = await fixture
            .findByIdAndUpdate(id, { $set: data}, { new: false })
        
        if(!Fixture) return {error:true, message:"Couldn't update fixture"}
        else return Fixture
    },

    replaceFixture: async (data)=>{        
        let Fixture = await fixture
            .findByIdAndUpdate(id, { $set: data}, { new: true })

        if(!Fixture) return {error:true, message:"Couldn't update fixture"}
        else return Fixture
    },


    newFixture: async ({ status, competition, venue, division, referee, home_team, away_team, other_leg_fixture, score, time_slot, time })=>(
        new fixture({
                    status, 
                    competition,
                    venue,
                    division,
                    referee,
                    home_team,
                    away_team,
                    other_leg_fixture,
                    score, 
                    time_slot, 
                    time,
                })
                .save()
                .then(result=>result)
                .catch(err=>console.log({error:true, message:"Error creating fixture"}))
    ),
}