import React, { Component, Fragment } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import {Link} from 'react-router-dom'
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from '@material-ui/core/Typography'
import JSStyle from '../../assets/jss/JSStyle'
// import routes from '../../routes/MemberRoutes'
import Sidebar from '../layout/SidebarLayout'
import Header from '../layout/HeaderLayout'


class MemberLayout extends Component {
    render() {
        
        const Routes = (
            <Switch>
              {this.props.routes && this.props.routes.map((prop, key) => <Route path={prop.path} component={prop.component} key={key} exact={true}           /> )} 
            </Switch>
          );

        const { classes, ...rest } = this.props;
        return (
            <Fragment>            
            <div className={classes.wrapper}> 
                <Header title={"title"} />
                <Sidebar routes={this.props.routes} />                
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                   {Routes}
                </main> 
            </div>
            </Fragment>
        );
    }
}

export default withStyles(JSStyle)(MemberLayout);