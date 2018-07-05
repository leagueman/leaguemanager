import React, {Fragment} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import ls from '../../utilities/localStorage'


const LogoutButton = (props)=>{

    const logout = ()=>{
        window.location.href = '/'
        ls.clear()
    }
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
                    <Button onClick={logout} color="primary" autoFocus>
                    Yes Logout
                    </Button>
                </DialogActions>
                </Dialog>
    
            </Fragment>
        );
    
}

export default LogoutButton;