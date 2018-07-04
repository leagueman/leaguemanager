import React, { Component, Fragment } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import {Link} from 'react-router-dom'
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography'
import JSStyle from '../../assets/jss/JSStyle'
import routes from '../../routes/TeamManagerRoutes'
import Sidebar from '../layout/SidebarLayout'
import Header from '../layout/HeaderLayout'



class TeamManager extends Component {
    render() {
        const Routes = (
            <Switch>
              {routes.map((prop, key) => <Route path={prop.path} component={prop.component} key={key} exact={true} user={this.props.user}/> )}
            </Switch>
          );

        const { classes, ...rest } = this.props;
        return (
            <div className={classes.wrapper}> 
                <Header title={"title"} />
                <Sidebar routes={routes} />                
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                   {Routes}
                </main> 
            </div>
        );
    }
}

export default withStyles(JSStyle)(TeamManager);