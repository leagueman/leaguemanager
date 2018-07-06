import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button, DialogContentText, DialogActions, TextField } from '@material-ui/core';

class OrganisationNewDialog extends React.Component {
state={
    title:'',
}
changeTitle=(e)=>{
    this.setState({title:e.target.value})
}
onSave = ()=>{
    this.props.onSave(this.state.title)
    this.setState({title:''})
}
render(){
    return (       
        <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        >
        <DialogTitle>
            Create a new Organisation
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                Please provide a name title for the Organisation you wish to add.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                fullWidth
                label="Organisation Title"
                type="text"
                value={this.state.title}
                onChange={this.changeTitle}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={this.props.onClose} color="primary">
                Cancel
            </Button>
            <Button onClick={this.onSave} color="primary">
                Save
            </Button>
        </DialogActions>
    </Dialog>
    );
}
};

export default OrganisationNewDialog;