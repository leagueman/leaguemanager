const organisation = require('./organisation');
const league = require('./league');
const division = require('./division');
const team = require('./team');
const player = require('./player');
const fixture = require('./fixture');
const referee = require('./referee');
const venue = require('./venue');
const user = require('./user');
const club = require('./club');
const competition = require('./competition');
const score = require('./score');
const table = require('./table');

module.exports = {
    club,
    competition,
    division,
    fixture,
    league,
    organisation,
    player,
    referee,
    score,
    table,
    team,
    user,
    venue,
}