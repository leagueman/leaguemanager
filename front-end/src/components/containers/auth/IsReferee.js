import React from 'react';
import {Redirect} from 'react-router-dom'
import RefereeLayout from '../../layout/RefereeLayout'

import USER from '../../../USER'

const IsReferee = () => {
    return (
        
        <USER.Consumer>
        { ( {user} )=>{
            console.log("User: "+user)
            return (user.success && user.user && (user.user.isAdmin || user.user.isReferee)) ? <RefereeLayout user={user}/> : <Redirect to='/login'/>
          }
        }
      </USER.Consumer>
    );
};

export default IsReferee;