import React, { Fragment }  from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import JSStyle from '../../assets/jss/JSStyle'
import { Link } from 'react-router-dom'

import USER from '../../USER'
import AccountMenu from '../AccountMenu';

const Header = ({ classes, title }) => {
  return (   
    <AppBar position="absolute" className={classes.appBar}>
    <Toolbar>
      <Typography variant="title" color="inherit" noWrap className={classes.flex}>
        League Manager {title}
      </Typography>

         <USER.Consumer>
           { ( {user, newUser} )=>{
                  return user.token 
                    ? <AccountMenu user={user}/>
                    : (
                      <Fragment>
                        <Button size="small" color="inherit" component={Link} to={'/login'} from={window.location.href}>Login</Button>
                        <Button size="small" color="inherit" component={Link} to={'/register'} from={window.location.href}>Register</Button>
                      </Fragment>
                      )
             }
           }
         </USER.Consumer>
         
    </Toolbar>
  </AppBar>
  );
};



export default withStyles(JSStyle)(Header);
