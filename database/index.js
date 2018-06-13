/*
This just gathers all the models into one place, exposing each models methods individually
*/

module.exports = {
    division: require('../database/models/division'),
    fixture: require('../database/models/fixture'),
    league: require('../database/models/league'),
    organisation: require('../database/models/organisation'),
    player: require('../database/models/player'),
    referee: require('../database/models/referee'),
    team: require('../database/models/team'),
    user: require('../database/models/user'),
    venue: require('../database/models/venue'),
}