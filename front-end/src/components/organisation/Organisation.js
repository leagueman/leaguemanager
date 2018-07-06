import React, { Component } from 'react';
import { getStandard } from '../../utilities/fetch'

import CompetitionsPanel from '../competitions/CompetitionsPanel';
import ClubsPanel from '../clubs/ClubsPanel';
import RefereesPanel from '../referees/RefereesPanel';
import UsersPanel from '../users/UsersPanel';
import { Grid, LinearProgress } from '@material-ui/core';

import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
    flex:{
        display:'flex',
    },
    progress:{
        justifyContent:'center',
    }
}

class Organisation extends Component {
    state={
        loader:false,
        organisation:{
            competitions:[],
            clubs:[],
            users:[],
            referees:[],
            title:'',
        }, 
    }

    fetchData(){   
        this.setState({loader:true})     
        fetch('http://localhost:9000/api/organisation/'+this.props._id, getStandard())            
        .then(res=>res.json())
        .then(organisation=>this.setState({organisation, loader:false}))
        .catch(err=>{
            console.log(err)
            this.setState({loader:false})   
        })
    }

    componentDidMount(){
        this.fetchData()
    }

    componentDidUpdate(prevProps) {
        if(prevProps._id!==this.props._id) this.fetchData();
      }

    render() {
        let org = this.state.organisation
        return (
            <Grid container spacing={32}>
                <Grid item sm={12} md={12}>
                    {this.state.loader ? <LinearProgress /> : null }
                </Grid>
                <Grid item sm={12} md={6}>
                    <CompetitionsPanel competitions={org.competitions} title={org.title}/>
                </Grid>
                <Grid item sm={12} md={6}>
                    <ClubsPanel clubs={org.clubs} title={org.title}/>
                </Grid>
                <Grid item sm={12} md={6}>
                    <RefereesPanel referees={org.referees} title={org.title}/>
                </Grid>
                <Grid item sm={12} md={6}>
                    <UsersPanel users={org.users} title={org.title}/>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Organisation);