import React, { Component } from 'react';
import Users from '../Users'
import {getStandard} from '../../utilities/fetchOptions'

class UsersContainer extends Component {
    state = {
        users:[]
    }
    async componentDidMount(){
        let users = await fetch('http://localhost:9000/api/user', getStandard)            
                        .then(res=>res.json())
                        .catch(err=>console.log(err))
        if(!users.error) this.setState({users})
    }

    
    render() {
        return (<Users users={this.state.users} user={this.props.user}/>);
    }
}

export default UsersContainer;