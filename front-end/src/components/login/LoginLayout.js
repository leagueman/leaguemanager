import React from 'react';
import LoginContainer from './LoginContainer'
import {Redirect} from 'react-router-dom'

import USER from '../../USER'

const Login = () => {
    return (    
            <USER.Consumer>
              { ( {user, newUser} )=>{
                    if(user.redirectTo) return <Redirect to={user.redirectTo} />
                    return <LoginContainer onLogin={newUser} user={user}/>
                }
              }
            </USER.Consumer>
    );
};

export default Login;