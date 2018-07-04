import React, { Component, Fragment } from 'react';
import {Route, Switch } from "react-router-dom";

import withStyles from "@material-ui/core/styles/withStyles";
import JSStyle from '../../assets/jss/JSStyle'
import defaultRoutes from '../../routes/HomeRoutes'
import Sidebar from '../layout/SidebarLayout'
import Header from '../layout/HeaderLayout'


class MainLayout extends Component {
    render() {  
        const {classes } = this.props; 
        let routes = this.props.routes || defaultRoutes

        
        const Routes = (
            <Switch>
              {routes && routes.map((prop, key) => <Route path={prop.path} component={prop.component} key={key} exact={true}           /> )} 
            </Switch>
          );

        return (
            <Fragment>            
            <div className={classes.wrapper}> 
                <Header />
                <Sidebar routes={routes} />                
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                   {Routes}
                </main> 
            </div>
            </Fragment>
        );
    }
}

export default withStyles(JSStyle)(MainLayout);