const express = require('express');
const router_api = require('./router_api');
const router_view = require('./router_view');
const {apiVerification, viewVerification } = require('../auth/authorisation');

const router = express.Router();

// router.use('/api', apiVerification, router_api);
router.use('/api', apiVerification, router_api);




const User = require('../database/models/user');


var passport = require('passport');
require('../auth/passport')(passport);
var jwt = require('jsonwebtoken');

// router.post('/signup', function(req, res) {
//       var newUser = new User({
//         email: req.body.email,
//         password: req.body.password
//       });
//       // save the user
//       newUser.save(function(err) {
//         if (err) {
//           return res.json({success: false, msg: 'Username already exists.'});
//         }
//         res.json({success: true, msg: 'Successful created new user.'});
//       });
    
//   });
  router.post('/signin', function(req, res) {
    User.findOne({
      email: req.body.email
    }, function(err, user) {
      if (err) throw err;
  
      if (!user) {
        res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            console.log("SIGN IN SUCCESSFUL", user)
            var token = jwt.sign({data:user}, process.env.SECRET_CODE);
            // return the information including token as JSON
            res.json({success: true, token: 'JWT ' + token});
          } else {
            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
    });
  });
  const getToken = function (r) {
    if(r.cookies.token) return r.cookies.token
    if(r.body.token) return r.body.token
    if(r.query.token) return r.query.token

    let {headers} = r
    if (headers && headers.authorization) {

        if(headers['x-access-token']) return headers['x-access-token']

      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
  router.get('/test', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req);
    if (token) {      
    //   res.cookie('token', data.token)
    //   res.status(200).json(data)
    console.log("USER ON REQ", req.user)
        res.json({success: true, msg: 'Successful created new book.'});
    
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  });



router.use('/', viewVerification, router_view);

router.use((req,res)=>{
    // res.send(404);
});

module.exports = router;