import React from 'react';
import DivisionsContainer from '../divisions/DivisionsContainer'
const League = (props) => {

    return (
        <div>
            <h1>{props.league.title}</h1>
            <DivisionsContainer {...props} />
        </div>
    );
};

export default League;