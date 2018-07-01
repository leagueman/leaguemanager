import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import {standardGet} from '../../utilities/fetchOptions'

class MyClub extends Component {
    state = {
        club:{}
    }
    async componentDidMount(){
    console.log(this.props)
        this.setState({
            club: await fetch('http://localhost:9000/api/club/5b2acc4113f3f70c087f3462', standardGet)
                            .then(res=>res.json())})
    }

    
    render() {
        return (
            <div>
                <Typography variant="headline" color="inherit" >{this.props.pageTitle}</Typography>
                <Typography variant="title" color="inherit" >{this.state.club.title}</Typography>
            </div>
        );
    }
}

export default MyClub;