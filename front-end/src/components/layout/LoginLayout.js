import React from 'react';
import Grid from '@material-ui/core/Grid'
import LoginContainer from '../containers/LoginContainer'
import {Redirect} from 'react-router-dom'

import USER from '../../USER'

const Login = () => {
    return (        
        <Grid container spacing={32}>
            <Grid item xs></Grid>
            <Grid item xs>        
            
            <USER.Consumer>
              { ( {user, newUser} )=>{
                    if(user.redirectTo) return <Redirect to={user.redirectTo} />
                    return <LoginContainer onLogin={newUser} user={user}/>
                }
              }
            </USER.Consumer>
            </Grid>
            <Grid item xs></Grid>
        </Grid>
    );
};

export default Login;