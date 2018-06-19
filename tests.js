const {createFixtureList, createSchedule} = require('./methods/fixtures')
const {randomize, isValidDate} = require('./methods/common')
const moment = require('moment')


module.exports = ()=>{
    console.log("CUSTOM TEST MODULE LOADED...")

    // Creating a fixture list
    const teams = [{team:"aaa"}, {team:"bbb"}, {team:"ccc"}, {team:"ddd"}, {team:"eee"}, {team:"fff"}]

    let fixtures = createFixtureList(teams)
    // console.log(fixtures)

    let schedule = createSchedule(fixtures, "2018-07-25", "2018-10-08")
    // console.log(schedule)    

    

}