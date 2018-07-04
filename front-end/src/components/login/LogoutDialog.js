import React, {Fragment, Component} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';


const LogoutButton = (props)=>{

        return (
            <Fragment> 
                <Dialog
                    open={props.open}
                    onClose={props.onClose}
                >
                <DialogTitle id="alert-dialog-title">Are you sure you want to log out?</DialogTitle>
                
                <DialogActions>
                    <Button onClick={props.onClose} color="primary">
                    No
                    </Button>
                    <Button onClick={props.onClose} color="primary" autoFocus>
                    Yes Logout
                    </Button>
                </DialogActions>
                </Dialog>
    
            </Fragment>
        );
    
}

export default LogoutButton;