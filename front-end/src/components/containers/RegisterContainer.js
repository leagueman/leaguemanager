import React, { Component } from 'react';
import RegisterForm from '../RegisterForm'
import {validateEmail} from '../../utilities/validation'
import {getStandard} from '../../utilities/fetchOptions'

class RegisterContainer extends Component {
    constructor(){
        super()
        this.state={
            registerError:false,
            registerErrorWith: "",
            registerErrorProblem: ""
        }
    }
    
    setError(isError, message){  
        if(isError===false) message=''      
        this.setState({
            registerError:isError, 
            registerErrorProblem: message 
        })
    }

    async onRegister({title, email, password1, password2, organisation, club, team}){
        // if(body.organisations) delete body.organisations
        // if(body.clubs) delete body.clubs
        // if(body.teams) delete body.teams
        console.log({title, email, password1, password2, organisation, club, team})
        this.setError(false, '')
        // if( !validateEmail( email ) ) return;
        let register = await fetch('http://localhost:9000/api/user/', 
        // TO-DO Make a standardPost object in utilities/fetchOptions 
        {
            method: 'POST',
            body: JSON.stringify({title, email, password1, password2, organisation, club, team}),
            headers: {
              'content-type': 'application/json'
            },
            mode: 'cors',
            cache: 'no-cache',
        })
        .then(res=>res.json())
        .then(res=>{console.log(res);return res;})
        .then(res=>this.logIn(res))
       
        // if(register.error){ 
        //     this.setError(true, register.message)
        // }else{
        //     this.logIn()
        // }
    }

    login(res){
        console.log(res)
    }

    render() {
        return <RegisterForm onRegister={this.onRegister.bind(this)} {...this.state} />
    }
}

export default RegisterContainer;