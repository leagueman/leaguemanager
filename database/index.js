/*
This just gathers all the models into one place, exposing each models methods individually
*/

module.exports = {
    Club: require('../database/models/club'),
    Competition: require('../database/models/competition'),
    Division: require('../database/models/division'),
    Fixture: require('../database/models/fixture'),
    League: require('../database/models/league'),
    Organisation: require('../database/models/organisation'),
    Player: require('../database/models/player'),
    Referee: require('../database/models/referee'),
    Score: require('../database/models/score'),
    Team: require('../database/models/team'),
    User: require('../database/models/user'),
    Venue: require('../database/models/venue'),
}