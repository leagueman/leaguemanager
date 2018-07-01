import React, { Component, Fragment } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import {Link} from 'react-router-dom'
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography'
import JSStyle from '../../assets/jss/JSStyle'
import routes from '../../routes/AdminRoutes'
import Sidebar from '../layout/Sidebar'
import Header from '../layout/Header'



class Admin extends Component {
    render() {
        const Routes = (
            <Switch>
              {routes.map((prop, key) => <Route path={prop.path} component={prop.component} key={key} exact={true}/> )}
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

export default withStyles(JSStyle)(Admin);