
import React, { Fragment, Component } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Routes from "./routes";
import USER from './USER'

const hist = createBrowserHistory();

const routes = Routes.map((prop, key) => <Route path={prop.path} component={prop.component} key={key} />)

const currentUser = {
  success:false,
  title:'',
  token: '',
  addUser: newUser=>{
    this.token = newUser.token
    console.log(this)
  }
}


class App extends Component {
    constructor(){
        super()

        this.addUser = user=>{
            console.log("New User added to context", user)
            if(!user.user.title) user.user.title = "Richard"
            this.setState({user})
        }

        this.state = {
            user:{},
            newUser:this.addUser
        }
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
