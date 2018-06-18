const randomize = (a,b)=>{
    return ((Math.round(Math.random()))*2)-1
}

const createFixtureList = function(teams, {
    two_legs = true,                           // HOME AND AWAY TIES ? 
    random = true                              // Mix up teams before schedule. Needs to be false to test 1-leg fixtures
}={}){
    
    /*
    4 teams play 6 matches over 1 leg or 12 over 2 legs
    this is 3 rounds of matches or 6 rounds of matches
    */

    let fixtures = []; 

    let rounds = two_legs ? ((teams.length-1)*2) : teams.length-1;
    let groupA = [...teams];

    if(random) groupA.sort(randomize)

    let groupB = groupA.splice(groupA.length/2, groupA.length);

    // The splice above rounds down, so an odd number of team will have the smaller number in A
    // The loop below making fixtures works off the length of A so the last team in B will be ignored
    // for that round, as they have no one to play

    for (let i = 1; i <= rounds; i++) {
        for (let j = 0; j < groupA.length; j++) {
            let home = i%2 ? groupA[j] : groupB[j];
            let away = i%2 ? groupB[j] : groupA[j]; 
            fixtures.push({home: home, away:away, round:i});
        }
        groupB.push(groupA.pop()); 
        groupA.splice( (teams.length%2 ? 0 : 1) , 0, groupB.shift());
    }        
    return fixtures
}


module.exports = {
    createFixtureList,
}