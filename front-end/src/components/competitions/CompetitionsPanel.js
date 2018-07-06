import React, { Fragment } from 'react';
import {MoreVert, Favorite,Share } from '@material-ui/icons';
import { Card, CardContent, CardActions, CardHeader, Avatar, IconButton, ListItem, ListItemText, List } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const styles = {
    root: {
      flexGrow: 1,
    },
    avatar: {
      backgroundColor: red[500],
    },
    list:{
        maxHeight:200,
        overflow: 'auto',
    },
  };

const CompetitionsPanel = (props) => {
    let {classes, competitions=[]} = props
    let competitionList = competitions
                        .sort((a,b)=>{
                            if(a.title>b.title) return 1
                            else return -1
                        })
                        .map((competition, key)=>(
                            <ListItem button key={key}>
                                <ListItemText primary={competition.title} />
                            </ListItem>
                        ))
    return (
        <Fragment>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                    <Avatar className={classes.avatar}>
                        C
                    </Avatar>
                    }
                    action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                    }
                    title="Competitions"
                    subheader={"Competitions being run"}
                />
                <CardContent>               
                    <List component="nav" className={classes.list}>
                        {competitionList}
                    </List>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <Favorite />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <Share />
                    </IconButton>
                
                </CardActions>
            </Card>
        </Fragment>
    );
};

export default withStyles(styles)(CompetitionsPanel);