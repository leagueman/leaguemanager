import React, { Component } from 'react';
import Users from '../Users'
import { getStandard } from '../../utilities/fetch'
class UsersContainer extends Component {
    state = {
        users:[]
    }

    componentDidMount(){
        fetch('http://localhost:9000/api/user', getStandard())            
        .then(res=>res.json())
        .then(users=>this.setState({users}))
        .catch(err=>console.log(err))
    }

    render() {
        return (<Users users={this.state.users} user={this.props.user}/>);
    }
}

export default UsersContainer;