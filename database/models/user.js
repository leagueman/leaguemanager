const mongoose = require('../database');
const {ObjectId} = mongoose.Schema.Types
const bcrypt = require('bcryptjs');

const Schema = new mongoose.Schema({
    title: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    secret: String,
    last_signed_in: Date,
    isAdmin: Boolean,
    isClubOfficial: Boolean,
    isLeagueSecretary: Boolean,
    isReferee: Boolean,
    isTeamManager: Boolean,
    isMember: Boolean,
    team:  {type: ObjectId, ref: 'team'},
    club:  {type: ObjectId, ref: 'club'},
    organisation:  {type: ObjectId, ref: 'organisation'},
})
Schema.pre('save', function(next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        let hashedPassword = bcrypt.hashSync(user.password, 8);
        user.password = hashedPassword;               
    } else {
        return next();
    }
    next()
});

Schema.methods.comparePassword = function(password, cb) {   
    if(bcrypt.compareSync(password, this.password)) {
        cb(null, true)
    }
    else throw cb(true, false)
}

module.exports = mongoose.model('user', Schema);