import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button, DialogContentText, DialogActions, TextField, Grid, FormControlLabel, Switch, MenuItem, Select, InputLabel, FormControl, FormHelperText } from '@material-ui/core';

class CompetitionNewDialog extends React.Component {
state={
    title:'',
    isLeague:true,
    isCup:false,
    category:'',
}
handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}
onSave = ()=>{
    this.props.onSave(this.state)
    this.setState({title:'', isLeague:true, isCup:false})
}
changeSwitch=(e)=>{
    let type = e.target.checked ? Object.assign({
            isLeague:false,
            isCup:false
        }, {[e.target.name]:e.target.checked}
    ) : {[e.target.name]:e.target.checked}
    this.setState(type)
}
render(){
    return (       
        <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        >
        <DialogTitle>
            Create a new Competition
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                Please provide a name title for the Competition you wish to add.
            </DialogContentText>
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                        autoFocus
                        margin="dense"
                        fullWidth
                        label="Competition Title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange}
                        name='title'
                    />
                </Grid>
               
                <Grid item xs={6}>
                    <FormControlLabel control={
                            <Switch
                                checked={this.state.isLeague}
                                onChange={this.changeSwitch}
                                color="primary"
                                name='isLeague'
                            />
                        }
                        label="League Competition"
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel control={
                            <Switch
                                checked={this.state.isCup}
                                onChange={this.changeSwitch}
                                color="primary"
                                name='isCup'
                            />
                        }
                        label="Cup Competition"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl >
                        {/* TO-DO this label doesn't work the first time the dialog opens cos the id isn't in the dom, it works on subsequent turns */}
                        <InputLabel htmlFor="category">Select Team Category</InputLabel>
                        <Select
                            value={this.state.category}
                            onChange={this.handleChange}
                            inputProps={{name: 'category', id:'category'}}
                        >
                        {/* TO-DO REPLACE WITH DATABASE CALL OR CREATE A HARD CODED OBJECT SOMEWHERE FOr NOW AND LEAVE IT HARD CODED */}
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Men's Senior</MenuItem>
                            <MenuItem value={2}>Men's Junior</MenuItem>
                            <MenuItem value={3}>Women's Senior</MenuItem>
                            <MenuItem value={4}>Women's Junior</MenuItem>
                            <MenuItem value={5}>Mens's Under 23</MenuItem>
                            <MenuItem value={6}>Boys's Under 19</MenuItem>
                            <MenuItem value={75}>Boys's Under 18</MenuItem>
                            <MenuItem value={8}>Boys's Under 17</MenuItem>
                            <MenuItem value={599}>Boys's Under 16</MenuItem>
                            <MenuItem value={9}>Boys's Under 15</MenuItem>
                            <MenuItem value={12}>Boys's Under 14</MenuItem>
                            <MenuItem value={132}>Boys's Under 13</MenuItem>
                            <MenuItem value={555}>Boys's Under 12</MenuItem>
                            <MenuItem value={544}>Boys's Under 11</MenuItem>
                        </Select>
                        <FormHelperText>This will greatly help later when choosing teams for each division</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
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

export default CompetitionNewDialog;