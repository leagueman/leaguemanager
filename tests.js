const {createFixtureList} = require('./methods/fixtures')
module.exports = ()=>{
    console.log("HI FROM TESTS")

    // Creating a fixture list
    const teams = [{team:"aaa"}, {team:"bbb"}, {team:"ccc"}, {team:"ddd"}]
    let fixtures = createFixtureList(teams).map(({home, away, round})=>{
        console.log(home.team + " v " + away.team + " in round ", round)
    })
    
}