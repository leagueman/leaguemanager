import React from 'react';
import {Redirect} from 'react-router-dom'
import AdminLayout from '../../layout/AdminLayout'

import USER from '../../../USER'

const IsAdmin = () => {
    return (
        
        <USER.Consumer>
        { ( {user} )=>{
            return (user.success && user.user && user.user.isAdmin) ? <AdminLayout user={user}/> : <Redirect to='/login'/>
          }
        }
      </USER.Consumer>
    );
};

export default IsAdmin;