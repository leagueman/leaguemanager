const { team } = require('../models/')

    
module.exports = {
    getTeams: ()=>(
        team
            .find({})
            .populate({ path: 'division' })
            .populate({ path: 'club' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting teams"}))
    ),

    getTeam: (id)=>(
        team
            .findById(id)
            .populate({ path: 'division' })
            .populate({ path: 'club' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:err}))
    ),

    getTeamsByClub: (club)=>(
        team
            .find({club})
            .then(data=>data)
            .catch(err=>console.log({error:true, message:err}))
    ),

    newTeam: ({title, club, title_short, primary_color, manager})=>(
        //CHECK IF USER IS ADMIN
        new team({
                    title, 
                    club,
                    title_short,
                    primary_color,
                    manager,
                })
                .save()
                .then(result=>result)
                .catch(err=>console.log({error:true, message:"Error creating team"}))
    ),
}