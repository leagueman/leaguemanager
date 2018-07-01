import React, { Component } from 'react';
import Users from '../Users'
import {standardGet} from '../../utilities/fetchOptions'

class MyClub extends Component {
    state = {
        users:[]
    }
    async componentDidMount(){
        console.log(this.props)
        this.setState({
            users: await fetch('http://localhost:9000/api/user', standardGet)
                            .then(res=>res.json())})
    }

    
    render() {
        console.log(this.props.user)
        return (
            <div>
                <Users users={this.state.users} user={this.props.user}/>
            </div>
        );
    }
}

export default MyClub;