import React, { Fragment } from 'react';
import {MoreVert, Favorite,Share } from '@material-ui/icons';
import { Card, CardContent, CardActions, CardHeader, Avatar, IconButton, ListItem, ListItemText, List } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const styles = theme=> ({
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
  });

const RefereesPanel = (props) => {
    let {classes, referees=[]} = props
    let refereeList = referees
                        .sort((a,b)=>{
                            if(a.user.title>b.user.title) return 1
                            else return -1
                        })
                        .map((referee, key)=>(
                            <ListItem button key={key}>
                                <ListItemText primary={referee.user.title} />
                            </ListItem>
                        ))
    return (
        <Fragment>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                    <Avatar className={classes.avatar}>
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                    }
                    title="Referees"
                    subheader={"Competitions being run by "+props.title}
                />
                <CardContent>               
                    <List component="nav" className={classes.list}>
                        {refereeList}
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

export default withStyles(styles)(RefereesPanel);