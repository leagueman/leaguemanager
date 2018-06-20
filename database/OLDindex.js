/*
This just gathers all the models into one place, exposing each models methods individually
*/

module.exports = {
    Club: require('./models/club'),
    Competition: require('./models/competition'),
    Division: require('./models/division'),
    Fixture: require('./models/fixture'),
    League: require('./models/league'),
    Organisation: require('./models/organisation'),
    Player: require('./models/player'),
    Referee: require('./models/referee'),
    Score: require('./models/score'),
    Team: require('./models/team'),
    User: require('./models/user'),
    Venue: require('./models/venue'),
}