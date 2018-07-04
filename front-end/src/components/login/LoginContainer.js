import React, { Component } from 'react';
import LoginForm from './LoginForm'
import {validateEmail} from '../../utilities/validation'
import {setAuthorization} from '../../utilities/fetch'

class LoginContainer extends Component {
    constructor(){
        super()
        this.state={
            loginError:false,
            loginErrorWith: "",
            loginErrorProblem: "",
            token:'',
        }
    }
    
    setError(isError, message){  
        if(isError===false) message=''      
        this.setState({
            loginError:isError, 
            loginErrorProblem: message
        })
    }

    onLogin(email, password){
        this.setError(false, '')
        if( !validateEmail( email ) ) return;
        fetch('http://localhost:9000/api/signin',
        // TO-DO Make a standardPost object in utilities/fetch  
        {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'content-type': 'application/json'
            },
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
        })
        .then(res=>res.json())
        .then(res=>{
            if(!res.success) throw(res.msg)
            setAuthorization(res.token);
            return res
        })
        .then(res=>{
            res.redirectTo = '/'
            if(res.user){
                if(res.user.isAdmin) res.redirectTo = '/admin'
                if(res.user.isClubOfficial) res.redirectTo = '/clubofficial'
                if(res.user.isLeagueSecretary) res.redirectTo = '/leaguesecretary'
                if(res.user.isReferee) res.redirectTo = '/referee'  
                if(res.user.isTeamManager) res.redirectTo = '/teammanager'  
                if(res.user.isMember) res.redirectTo = '/member'  
            }
            
            this.props.onLogin(res)
        })
        .catch(err=>this.setError(true, err))
    }


    render() {
        return <LoginForm onError={this.setError.bind(this)} onLogin={this.onLogin.bind(this)} {...this.state} /> 
    }
}

export default LoginContainer;