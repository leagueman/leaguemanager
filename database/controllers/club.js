const { club } = require('../models/')
const team = require('./team')
const venue = require('./venue')
    
module.exports = {
    getClubs: ()=>(
        club
            .find({})
            .populate({ path: 'organisation' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting clubs"}))
    ),

    getClub: (id)=>(
        club
            .findById(id)
            .populate({ path: 'organisation' })
            .then(async data=>{
                data.teams = await team.getTeamsByClub(data._id)
                data.venues = await venue.getVenuesByClub(data._id)
                return data
            })
            .catch(err=>console.log({error:true, message:err}))
    ),
    
    getClubsByOrganisation: (organisation)=>(
        club
            .find({organisation})
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting clubs"}))
    ),



    // TRYING ASYNC/AWAIT AND PROMISES TO SEE WHICH WORKS

    updateClub: async (id, data)=>{
        let Club = await club
            .findByIdAndUpdate(id, { $set: data}, { new: false })
        
        if(!Club) return {error:true, message:"Couldn't update club"}
        else return Club
    },

    replaceClub: async (data)=>{        
        let Club = await club
            .findByIdAndUpdate(id, { $set: data}, { new: true })

        if(!Club) return {error:true, message:"Couldn't update club"}
        else return Club
    },


    newClub: async ({title, organisation, venue, user})=>(
        //CHECK IF USER IS ADMIN
        new club({
                    title, 
                    organisation,
                    venue,
                })
                .save()
                .then(result=>result)
                .catch(err=>console.log({error:true, message:"Error creating club"}))
    ),


}






// UPDATE METHODS
       
// METHOD 1
            // OBJECT RETRIEVED MODIFIED AND SAVED
            // Tank.findById(id, function (err, tank) {
            //     if (err) return handleError(err);
              
            //     tank.size = 'large';
            //     tank.save(function (err, updatedTank) {
            //       if (err) return handleError(err);
            //       res.send(updatedTank);
            //     });
            //   });

// METHOD 2
            //NO OBJECT RETURNED
            // Tank.update({ _id: id }, { $set: { size: 'large' }}, callback);

// METHOD 3
            // IF WE NEED OBJECT - CREATES A NEW OBJECT WITH FLAG
            // Tank.findByIdAndUpdate(id, { $set: { size: 'large' }}, { new: true }, function (err, tank) {
            //     if (err) return handleError(err);
            //     res.send(tank);
            //   });