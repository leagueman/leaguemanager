const methods = {

    // Accepts a fixture object with its score populated 
    // The AET & Penalty scores are irrelevant for a league
    aggregate_scores: (fixture={})=>{
        let { 
            home_score_referee,
            away_score_referee,
            home_score_club,
            away_score_club,
            home_score,
            away_score
         } = fixture.score

        // IF THE SCORE IS ALREADY SET - RETURN IT
        if( typeof home_score === 'number' 
            && typeof away_score === 'number'
        ) return {home_score:home_score, away_score:away_score}

        // OTHERWISE - CHECK IF THEY'RE THE SAME, IN WHICH CASE RETURN THAT
        if( home_score_referee === home_score_club
            && away_score_referee === away_score_club
        ) return {home_score:home_score_referee, away_score:away_score_referee}

        // OTHERWISE - RETURN A PAIR OF NULLS
        return {home_score:null, away_score:null}
    }
}

module.exports = methods