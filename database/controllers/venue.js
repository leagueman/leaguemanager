const { venue } = require('../models/')

    
module.exports = {
    getVenues: ()=>(
        venue
            .find({})
            .populate({ path: 'club' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting venues"}))
    ),

    getVenue: (id)=>(
        venue
            .findById(id)
            .populate({ path: 'club' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:err}))
    ),

    getVenuesByClub: (club)=>(
        venue
            .find({club})
            .then(data=>data)
            .catch(err=>console.log({error:true, message:err}))
    ),

    newVenue: ({title, club, location})=>(
        //CHECK IF USER IS ADMIN
        new venue({
                    title, 
                    club,
                    location
                })
                .save()
                .then(result=>result)
                .catch(err=>console.log({error:true, message:"Error creating venue"}))
    ),
}