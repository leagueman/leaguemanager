const score = require('../score');

describe('score is validated against referee and club_official scores',()=>{

    test('returns a valid official score', () => {
        let fixture = {
            score:{
                home_score_referee: 2,
                away_score_referee: 1,
                home_score_club: 2,
                away_score_club: 1,
                home_score:null,
                away_score:null
            }
        };
    expect( score.aggregate_scores(fixture) ).toEqual({home_score:2, away_score:1});
    });


    test('conflicting scores returns null score', () => {
        let fixture = {
            score:{
                home_score_referee: 2,
                away_score_referee: 2,
                home_score_club: 2,
                away_score_club: 1,
                home_score:null,
                away_score:null
            }
        }
    expect( score.aggregate_scores(fixture) ).toEqual({home_score:null, away_score:null});
    })

    test('Official score over rules and is returned', () => {
        let fixture = {
            score:{
                home_score_referee: 2,
                away_score_referee: 1,
                home_score_club: 2,
                away_score_club: 1,
                home_score:2,
                away_score:2
            }
        };
    expect( score.aggregate_scores(fixture) ).toEqual({home_score:2, away_score:2});
    });

    test('An incomplete score to nullify the full score', () => {
        let fixture = {
            score:{
                home_score_referee: 2,
                away_score_referee: null,
                home_score_club: 2,
                away_score_club: 1,
                home_score:2,
                away_score:undefined
            }
        };
    expect( score.aggregate_scores(fixture) ).toEqual({home_score:null, away_score:null});
    });  
})