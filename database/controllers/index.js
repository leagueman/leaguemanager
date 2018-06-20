const organisation = require('./organisation');
const league = require('./league');
const division = require('./division');
const team = require('./team');
const player = require('./player');
const fixture = require('./fixture');
const referee = require('./referee');
const venue = require('./venue');
const user = require('./user');
const score = require('./score');
const table = require('./table');
const club = require('./club');
const competition = require('./competition');

module.exports = {
    club,
    score, 
    table, 
    competition,
    organisation,
    league,
    division,
    team,
    player,
    fixture,
    referee,
    user,
    venue
}