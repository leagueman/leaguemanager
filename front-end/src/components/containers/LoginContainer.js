import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import LoginForm from '../LoginForm'
import {validateEmail} from '../../utilities/validation'

class LoginContainer extends Component {
    constructor(){
        super()
        this.state={
            loginError:false,
            loginErrorWith: "",
            loginErrorProblem: "",
            token:''
        }
    }
    
    setError(isError, message){  
        if(isError===false) message=''      
        this.setState({
            loginError:isError, 
            loginErrorProblem: message
        })
    }

    async onLogin(email, password){
        this.setError(false, '')
        if( !validateEmail( email ) ) return;
        let response = await fetch('http://localhost:9000/api/user/signin', {
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
        
        if(response.error){ 
            this.setError(true, response.message)
        }else{
            this.setState({token:response.token})
            this.props.onLogin(response)
        }
    }


    render() {
        if(this.state.token) return <Redirect to="/"/>
        else return <LoginForm onLogin={this.onLogin.bind(this)} {...this.state} /> 
    }
}

export default LoginContainer;