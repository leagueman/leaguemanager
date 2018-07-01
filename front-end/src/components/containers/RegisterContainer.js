import React, { Component } from 'react';
import RegisterForm from '../RegisterForm'
import {validateEmail} from '../../utilities/validation'

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

    async onRegister(email, password1, password2){
        this.setError(false, '')
        if( !validateEmail( email ) ) return;
        let register = await fetch('http://localhost:9000/api/user/', {
            method: 'POST',
            body: JSON.stringify({email, password1, password2}),
            headers: {
              'content-type': 'application/json'
            },
            mode: 'cors',
            cache: 'no-cache',
        })
        .then(res=>res.json())
        
        if(register.error){ 
            this.setError(true, register.message)
        }else{
            console.log("NICEONE")
        }
    }


    render() {
        return ( <RegisterForm onRegister={this.onRegister.bind(this)} {...this.state} /> );
    }
}

export default RegisterContainer;