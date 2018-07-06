import React from 'react'
import Organisation from './Organisation'
import { post } from '../../utilities/fetch'

import { AppBar, Toolbar,Button,Menu,MenuItem,Typography,Grid } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { withStyles } from '@material-ui/core/styles';
import OrganisationNewDialog from './OrganisationNewDialog';

const styles = (theme)=>( {
    root: {
      flexGrow: 1,
    },
    flex:{
        flex:1,        
        justifyContent: 'spaceBetween',
    },
    fab: {
      right: theme.spacing.unit * 2,
      zIndex: theme.zIndex.tooltip,
    },
})

class Organisations extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            anchorEl:null,
            newOrganisationDialogOpen:false,
            organisations: props.list || [],
            organisation:null,
        }
    }
   
    openNewOrganisationDialog = () => {
        this.setState({ newOrganisationDialogOpen: true });
    };
    closeNewOrganisationDialog = () => {
        this.setState({ newOrganisationDialogOpen: false });
    };
    
    handleOpenMenu = e=>{
        this.setState({ anchorEl: e.currentTarget });
    }

    handleCloseMenu = ()=>{
        this.setState({ anchorEl: null });
    }

    chooseOrganisation = (e, _id, title)=>{
        this.setState({organisation_id:_id, organisation_title:title})
        this.handleCloseMenu()
    }
    saveNewOrganisation=(title)=>{
        this.closeNewOrganisationDialog()
        
        fetch('http://localhost:9000/api/organisation', post({title}))            
        .then(res=>res.json())
        .then(newOrganisation=>{
            let organisations = [...this.state.organisations]
            organisations.push(newOrganisation)            
            this.setState({organisations}) 
        })
        .catch(err=>console.log(err))
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.organisations.length < this.props.list.length) this.setState({organisations:this.props.list})
    }
    render() {
        let {classes} = this.props
        let organisations = this.state.organisations.map((org, key)=> <MenuItem key={key} onClick={e=>this.chooseOrganisation(e, org._id, org.title)} >{org.title}</MenuItem>)
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Button onClick={this.handleOpenMenu} variant="fab" mini color="primary">
                            <ArrowDropDown/>
                        </Button>
                        <Menu
                            anchorEl={this.state.anchorEl}
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.handleClose}
                        >
                            {organisations}
                        </Menu>
                       
                        <Typography variant="headline" color="inherit">
                            {this.state.organisation_title || "Choose an Organisation"}
                        </Typography>
                        <div>
                            <Button variant="fab" color="secondary">
                                <AddIcon onClick={this.openNewOrganisationDialog}/>
                            </Button>
                            <OrganisationNewDialog 
                                open={this.state.newOrganisationDialogOpen}
                                onClose={this.closeNewOrganisationDialog.bind(this)} 
                                onSave={this.saveNewOrganisation.bind(this)}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
                <Grid container>
                    <Grid item>
                    {this.state.organisation_id && (
                        <Organisation _id={this.state.organisation_id} />
                    )}
                    </Grid>
                </Grid>
            </div>
        )
    }
  
}

export default withStyles(styles)(Organisations)