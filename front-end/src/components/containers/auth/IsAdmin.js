import React from 'react';
import AdminLayout from '../../layout/AdminLayout'

import USER from '../../../USER'

const isAdmin = () => {
    return (
        
        <USER.Consumer>
        { ( {user} )=>{
            console.log("Token: "+user.token)
             return <AdminLayout user={user}/>
          }
        }
      </USER.Consumer>
    );
};

export default isAdmin;