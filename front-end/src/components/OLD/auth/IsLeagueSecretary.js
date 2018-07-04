import React from 'react';
import {Redirect} from 'react-router-dom'
import LeagueSecretaryLayout from '../../layout/LeagueSecretaryLayout'

import USER from '../../../USER'

const IsLeagueSecreatary = () => {
    return (
        
        <USER.Consumer>
        { ( {user} )=>{
            console.log("User: "+user)
            return (user.success && user.user && (user.user.isAdmin || user.user.isLeagueSecretary)) ? <LeagueSecretaryLayout user={user}/> : <Redirect to='/login'/>
          }
        }
      </USER.Consumer>
    );
};

export default IsLeagueSecreatary;