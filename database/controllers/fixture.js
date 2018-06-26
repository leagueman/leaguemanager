const { fixture } = require('../models/')
const table = require('./table')
const venue = require('./venue')

const {createTable} = require('../../methods/table')

const aggregate = async data=>{
    // data.home_team = await team.getTeam(data.home_team)
    // data.away_team = await team.getTeam(data.away_team)
    // data.venues = await venue.getVenues({fixture:data._id})
    return data
}

// TO-DO this is triggered when you update a fixture, it should trigger when you update a score
const siblings = async data=>{
    let fixtures = await module.exports.getFixtures({division:data.division})
    let table = createTable(fixtures)
    table
        .updateTable(data.division, table)
        .then(data=>data)
        .catch(err=>console.log({error:true, message:"Error updating table"}))
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
        fixture
            .findByIdAndUpdate(id, { $set: data}, { new: false })
            .then(siblings)
            .catch(err=>console.log({error:true, message:err}))
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