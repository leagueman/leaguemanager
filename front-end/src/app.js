
import React, { Fragment, Component } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import ls from './utilities/localStorage'
import {setAuthorization} from './utilities/fetch'

import Routes from "./routes";
import USER from './USER'

const hist = createBrowserHistory();

const routes = Routes.map((prop, key) => <Route path={prop.path} component={prop.component} key={key} />)

class App extends Component {
    constructor(){
        super()

        this.addUser = (user)=>{
            this.setState({user})
        }

        this.state = {
            user: {
                success: ls.get('success'),
                user:ls.get('user'),
                token:ls.get('token'),
                redirectTo: ls.get('redirectTo')
            } || {},
            newUser:this.addUser
        }
        ls.get('token') && setAuthorization(ls.get('token'))
    }

    render() {
        return (
            <Fragment>
                <USER.Provider value={this.state}>
                <Router history={hist}>   
                    <Switch>
                        {routes}
                    </Switch>
                </Router>
                </USER.Provider>                
            </Fragment>
        );
    }
}

export default App;
