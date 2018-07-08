import React from 'react';
import { Grid, Paper, List, ListItem, ListItemText } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles'

const styles = (theme)=> ({
    root:{

    },
    division:{
        padding:theme.spacing.unit*2,
        width:200,
    },
    dropzone:{
        width:'100%',
        height:200,
        backgroundColor: 'default',     
        overflow: 'auto',
        maxHeight: 300,
    },
    teams:{        
        overflow: 'auto',
        maxHeight: 300,
    },
    team:{
        backgroundColor: theme.palette.background.default,
    },
})

class DivideTeams extends React.Component {
   state={
       divisions:this.props.divisionsObject
   }

    allowDrag = (e)=> {
        e.preventDefault()
    }
    
    onDragStart = (e)=> {
        e.dataTransfer.setData("text", e.target.id)
    }
    
    onDrop = (e)=> {
        e.preventDefault()
        let team =  e.dataTransfer.getData("text")
        let division = e.target.id
        console.log(division, team)
        e.target.appendChild(document.getElementById(team))
        let {divisions} = this.state
        if(!divisions[division]) divisions[division] = []
        // TO-DO REMOVE TEAM FROM ALL ARRAYS BEFORE PROCEEDING OTHERWISE IF MOVING FROM ONE DIVISION TO ANOTHER THAT TEAM IS IN BOTH
        divisions[division].push(team)

        this.setState({divisions})        
        this.props.onChange('divisionsObject', divisions) 
    }

    componentDidMount(){
       // TO-DO going back and adding another division wipes this 
        let {divisions} = this.state
        if(divisions){
            for(let division in divisions){
                for(let team in divisions[division]){
                    document.getElementById(division).appendChild(document.getElementById(divisions[division][team]))
                }
            }
        }
    }

render(){
    let {classes} = this.props
    let divisions = this.props.divisions 
        ?   this.props.divisions.map((division, key)=>{            
                return division.value
                    ?   (
                            <Grid item key={key}>
                                <Paper className={classes.division}>
                                    {division.value}
                                  
                                    <List className={classes.dropzone} dense={true} onDrop={this.onDrop} onDragOver={this.allowDrag} id={division.value}>
                                    </List>
                                </Paper>
                            </Grid>
                        )
                    : null
            })
        :   null

        let teams = [1,2,8,3,4,5,0,6,7,9]

     teams = teams.map((team, key)=>{
        return (
                <ListItem key={key} draggable={true} onDragStart={this.onDragStart} id={'team-'+key} className={classes.team}>
                    <ListItemText primary={'team-'+key}/>
                </ListItem>
                )
        })
    return (
        <Grid container>
            <Grid item md>
                <Grid container spacing={16}>
                    {divisions}
                </Grid>
            </Grid>
            <Grid item md>
                <List dense={true} className={classes.teams}>
                  {teams}
                </List>
            </Grid>
        </Grid>
    );
}
};

export default withStyles(styles)(DivideTeams);