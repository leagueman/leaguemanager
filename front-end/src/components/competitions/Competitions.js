import React from 'react'
import { getRequest, post, fetchQuery, getStandard } from '../../utilities/fetch'
import { AppBar, Toolbar,Button,Menu,MenuItem,Typography,Grid, Paper } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import LeagueIcon from '@material-ui/icons/Menu';
import CupIcon from '@material-ui/icons/DeviceHub';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { withStyles } from '@material-ui/core/styles';
import CompetitionNewDialog from './CompetitionNewDialog';
import CompetitionButton from './CompetitionButton';
import LeagueContainer from '../leagues/LeagueContainer';
import CupContainer from '../cups/CupContainer';

// import injectUser from '../../USER'


const styles = (theme)=>( {
    root: {
        flexGrow: 1,
    },
    // flex:{
    //     flex:1,        
    //     justifyContent: 'spaceBetween',
    // },
    // fab: {
    //     right: theme.spacing.unit * 2,
    //     zIndex: theme.zIndex.tooltip,
    // },

})

class Competitions extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            newCompetitionDialogOpen:false,
            competitions:[],
            competition : null,
            competition_title: ''
        }
    }
    
    openNewCompetitionDialog = () => {
        this.setState({ newCompetitionDialogOpen: true });
    };
    closeNewCompetitionDialog = () => {
        this.setState({ newCompetitionDialogOpen: false });
    };
    
    handleOpenMenu = e=>{
        this.setState({ anchorEl: e.currentTarget });
    }

    handleCloseMenu = ()=>{
        this.setState({ anchorEl: null });
    }

    chooseCompetition = (e, index, title)=>{
        this.setState({anchorEl: null, competition:index, competition_title:title})
    }
    saveNewCompetition=(newCompetition)=>{
        this.closeNewCompetitionDialog()
        newCompetition.type = newCompetition.isLeague ? 'league' : 'cup'
        let body = {
            title:newCompetition.title,
            type:newCompetition.type,
            organisation:this.props.user.organisation
        }
        fetch('http://localhost:9000/api/competition', post(body))            
            .then(res=>res.json())
            .then(res=>{
                let competitions = [...this.state.competitions]
                competitions.push(res)         
                this.setState({competitions, competition:(competitions.length-1), competition_title:res.title})                
                return newCompetition
            })
            .catch(err=>console.log(err))
    }
    
    componentDidMount(){
        this.fetchData()
    }

    fetchData(){        
        fetchQuery('http://localhost:9000/api/competition', {organisation:this.props.user.organisation})
            .then(res=>res.json())
            .then(res=>{
                this.setState({competitions:res})
            })
            .catch(err=>{
                console.log(err)
            })
    }

    render() {
        let {classes} = this.props
        let {competition, competitions} = this.state

        let competitionsMenuItems =  competitions.map((competition, key)=>(
            <MenuItem key={key} 
                onClick={e=>this.chooseCompetition(e, key, competition.title)} 
            >
                {competition.type === 'league' ? <LeagueIcon/> : <CupIcon/>}
                {competition.title}
            </MenuItem>
        ))
        let competitionType = competition!==null && competitions[competition].type
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
                            {competitionsMenuItems}
                        </Menu>
                        
                        <Typography variant="headline" color="inherit">
                            {this.state.competition_title || "Choose an Competition"}
                        </Typography>
                        <div>
                            <Button variant="fab" color="secondary">
                                <AddIcon onClick={this.openNewCompetitionDialog}/>
                            </Button>
                            <CompetitionNewDialog 
                                open={this.state.newCompetitionDialogOpen}
                                onClose={this.closeNewCompetitionDialog.bind(this)} 
                                onSave={this.saveNewCompetition.bind(this)}
                            />
                        </div>
                    </Toolbar>
                </AppBar>  
                
                <Grid container>
                    <Grid item>   
                        { competitionType==='league' && <LeagueContainer competition={competitions[competition]._id} league={competitions[competition].league} {...this.props}/> }
                        { competitionType==='cup' && <CupContainer competition={competitions[competition]}  {...this.props}/> }
                    </Grid>
                </Grid>
            </div>
        )
    }
    
}

export default withStyles(styles)(Competitions)