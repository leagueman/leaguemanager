import React, { Component, Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { withStyles } from '@material-ui/core/styles'
import JSStyle from '../assets/jss/JSStyle'

class AccountMenu extends Component { 
    state = {
        auth: true,
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes, user } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            
            <Fragment>
                <Typography className={classes.caption} color="inherit">
                {user.user.email}
                </Typography>
                
                <IconButton
                    onClick={this.handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={this.state.anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </Menu>
          </Fragment>
        );
    }
}

export default withStyles(JSStyle)(AccountMenu);