import React, { Component } from 'react';
import LoginForm from '../LoginForm'
import {validateEmail} from '../../utilities/validation'
// import {getStandard} from '../../utilities/fetch'

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

    async onLogin(email, password){
        this.setError(false, '')
        if( !validateEmail( email ) ) return;
        let response = await fetch('http://localhost:9000/signin',
        // // TO-DO Make a standardPost object in utilities/fetch  
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

            if(res.error){ 
                this.setError(true, res.message)
            }else{
                res.redirectTo = '/'
                if(res.user){
                    if(res.user.isAdmin) res.redirectTo = '/admin'
                    if(res.user.isClubOfficial) res.redirectTo = '/clubofficial'
                    if(res.user.isLeagueSecretary) res.redirectTo = '/leaguesecretary'
                    if(res.user.isReferee) res.redirectTo = '/referee'  //?
                    if(res.user.isTeamManager) res.redirectTo = '/teammanager'  
                    if(res.user.isMember) res.redirectTo = '/member'  
                }
                
                this.props.onLogin(res)
            }
        })


    }


    render() {
        // console.log(this.state.token, this.state.redirectTo)
        // if(this.state.token) return <Redirect to={this.state.redirectTo}/>
        // else 
        return <LoginForm onError={this.setError.bind(this)} onLogin={this.onLogin.bind(this)} {...this.state} /> 
    }
}

export default LoginContainer;