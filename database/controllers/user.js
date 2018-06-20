const { user } = require('../models/')
const {createToken} = require('../../auth/authorisation');
var bcrypt = require('bcryptjs');

    
module.exports = {
   signin : ({email, password})=>(
        user
            .findOne({email})
            .populate({ path: 'team' })
            .populate({ path: 'club' })
            .populate({ path: 'organisation' })
            .then(data=> bcrypt.compareSync(password, data.password) ? data : {error:true, message:"Incorrect password"})
            .then(data=>{
                data.password = ""
                return data
            })
            .then(data=>({
                success: true,
                token: createToken({
                    sessionData: data,
                    maxAge: 3600
                })
            }))
            .catch(err=>console.log({error:true, message:err}))
    ), 

    signup: ({title, email, password1, password2, last_signed_in, is_admin, is_club_official, team, club})=>{
        if(password1===password2){ 
            let hashedPassword = bcrypt.hashSync(password1, 8);
            return new user({
                        title, 
                        email,
                        password:hashedPassword,
                        last_signed_in: Date.now(),
                        is_admin,
                        is_club_official,
                        team,
                        club,
                    })
                    .save()
                    .then(result=>result)
                    .catch(err=>console.log({error:true, message:"Error getting users"}))
        }else{
            return {error:true, message:"Passwords didn't match"}
        }
    },

    find: ()=>(
        user
            .find({})
            .then(data=>data)
            .catch(err=>console.log({error:true, message:"Error getting divivions"}))
    ),

    findById: (id)=>(
        user
            .findById(id)
            .populate({ path: 'team' })
            .populate({ path: 'club' })
            .populate({ path: 'organisation' })
            .then(data=>data)
            .catch(err=>console.log({error:true, message:err}))
    ),
    

    
}