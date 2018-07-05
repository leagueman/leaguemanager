import React, { Component } from 'react';
import LoginForm from './LoginForm'
import {validateEmail} from '../../utilities/validation'
import {setAuthorization} from '../../utilities/fetch'
import {typeOfUser} from '../../utilities/utils'
import ls from '../../utilities/localStorage'

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

    onLogin({email, password, rememberMe}){
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
            if(!res.success) throw(res.message)
            setAuthorization(res.token);
            return res
        })
        .then(res=>{
            let type_of_user = res.user && typeOfUser(res.user)
            res.redirectTo = type_of_user ? '/'+(type_of_user.substring(2,type_of_user.length)).toLowerCase() : '/'

            // IF rememberMe is ticked - SAVE THE LOGIN RESPONSE TO LOCALSTORAGE
            rememberMe ? ls.set(res) : ls.clear()
            this.props.onLogin(res)
        })
        .catch(err=>this.setError(true, err))
    }


    render() {
        return <LoginForm onError={this.setError.bind(this)} onLogin={this.onLogin.bind(this)} {...this.state} exact={true} />
    }
}

export default LoginContainer;