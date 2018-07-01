import React from 'react';
import {Redirect} from 'react-router-dom'
import ClubOfficialLayout from '../../layout/ClubOfficialLayout'

import USER from '../../../USER'

const IsClubOfficial = () => {
    return (
        
        <USER.Consumer>
        { ( {user} )=>{
            console.log("User: "+user)
            return (user.success && user.user && (user.user.isAdmin || user.user.isClubOfficial)) ? <ClubOfficialLayout user={user}/> : <Redirect to='/login'/>
          }
        }
      </USER.Consumer>
    );
};

export default IsClubOfficial;