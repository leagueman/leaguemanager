import React from 'react';
import {Redirect} from 'react-router-dom'
import MemberLayout from '../../layout/MemberLayout'

import USER from '../../../USER'

const IsMember = () => {
    return (
        
        <USER.Consumer>
        { ( {user} )=>{
            console.log("User: "+user)
            return (user.success && user.user && (user.user.isAdmin || user.user.isMember)) ? <MemberLayout user={user}/> : <Redirect to='/login'/>
          }
        }
      </USER.Consumer>
    );
};

export default IsMember;