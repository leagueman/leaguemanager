import React from 'react';
import {Redirect} from 'react-router-dom'
import TeamManagerLayout from '../../layout/TeamManagerLayout'

import USER from '../../../USER'

const IsTeamManager = () => {
    return (
        
        <USER.Consumer>
        { ( {user} )=>{
            console.log("User: "+user)
            return (user.success && user.user && (user.user.isAdmin || user.user.isTeamManager)) ? <TeamManagerLayout user={user}/> : <Redirect to='/login'/>
          }
        }
      </USER.Consumer>
    );
};

export default IsTeamManager;