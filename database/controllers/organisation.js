const { organisation } = require('../models/')
const club = require('./club')

module.exports = {
    getOrganisations: ()=>(
        organisation
            .find({})
            .populate({ path: 'clubs', select:'title' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting organisations"}))
    ),

    getOrganisation: (id)=>{       
        return organisation
            .findById(id)
            .then(async data=>{
                data.clubs = await club.getClubsByOrganisation(data._id)
                return data
            })
            .catch(err=>{
                console.log({error:true, message:err})
            })
        },

    newOrganisation: async ({title})=>(
        //CHECK IF USER IS ADMIN
        new organisation({
                    title, 
                })
                .save()
                .then(result=>result)
                .catch(err=>console.log({error:true, message:"Error creating organisation"}))
    ),

}