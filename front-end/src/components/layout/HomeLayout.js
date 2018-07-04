import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import JSStyle from '../../assets/jss/JSStyle'
import routes from '../../routes/HomeRoutes'
import Sidebar from '../layout/SidebarLayout'
import Header from '../layout/HeaderLayout'



class Home extends Component {
    render() {
        const Routes = (
            <Switch>
              {routes.map((prop, key) => <Route path={prop.path} component={prop.component}  key={key} exact/> )}
            </Switch>
          );
        const { classes } = this.props;
        return (
            <div className={classes.wrapper}> 
                <Header />
                <Sidebar routes={routes} />                
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {Routes}
                </main>
            </div>
        );
    }
}

export default withStyles(JSStyle)(Home);