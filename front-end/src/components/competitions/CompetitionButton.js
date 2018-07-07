
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, Typography, Button, CardContent, CardActions } from '@material-ui/core';

const styles = {

}
const CompetitionButton = (props) => {
    let {classes} = props
    return (
        <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.competition.title}
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
};

export default withStyles(styles)(CompetitionButton);