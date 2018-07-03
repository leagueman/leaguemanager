const JwtStrategy = require('passport-jwt').Strategy
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../database/models/user');


const getToken = r=> {
    if(r.cookies.token) return r.cookies.token
    if(r.body.token) return r.body.token
    if(r.query.token) return r.query.token

    let {headers} = r
    if (headers) {

        if(headers['x-access-token']) return headers['x-access-token']
        if(headers.authorization){
            let parted = headers.authorization.split(' ');
            if (parted.length === 2) return parted[1];
            else return null;
        }

    } 

    return null
};

const Passport = passport=> {
    var opts = {};
    opts.jwtFromRequest = getToken 
    opts.secretOrKey = process.env.SECRET_CODE;
    passport.use(new JwtStrategy(opts, (jwt_payload, done)=> {
        User.findById(jwt_payload.data._id, (err, user)=> {
            if(err) return done(err, false);
            else if(user) done(null, user);
            else done(null, false);
        });
    }));
}


const signin = (req, res)=> {
    console.log(req.body)
    User.findOne({ email: req.body.email }, (err, user)=> {
      if (err) throw err;
      if (!user) res.status(401).send({success: false, msg: 'Authentication failed. User not found.'})
      else {
        user.comparePassword(req.body.password, (err, isMatch)=> {
            if(err) res.status(401).send({success: false, msg: 'Authentication failed. There was an error'})
            else if(isMatch) res.status(200).json( {success: true, token:jwt.sign( {data:user}, process.env.SECRET_CODE, {expiresIn:60} )} )
            else res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'})      
        });
      }
    });
  }

const signup = (req, res)=> {
    // TO-DO ADD OTHER PROPERTIES HERE
    var newUser = new User({
      email: req.body.email,
      password: req.body.password,
    });
    newUser.save(err=> {
      if(err) return res.json({success: false, msg: 'Username already exists.'});
      res.json({success: true, msg: 'Successful created new user.'});
    });
  
}

const isAdmin = (req,res,next)=>{
    if(req.user.isAdmin) next()
    else throw {message:"Not an Admin"}
}

const isReferee = (req,res,next)=>{
    if(
        req.user.isReferee || 
        req.user.Admin || 
        req.user.LeagueSecretary 
    ) next()
    else throw {message:"Not a Referee"}
}

Passport(passport);

module.exports = {
    Passport,
    Authenticate: passport.authenticate('jwt', { session: false}),
    getToken,
    signin,
    signup,
    isAdmin,
    isReferee,
}