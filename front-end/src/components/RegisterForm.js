import React from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import JSStyle from '../assets/jss/JSStyle'
import { withStyles } from '@material-ui/core/styles'

class RegisterForm extends React.Component {
    constructor(){
        super()
        this.state = {
            email:"",
            password1:"", 
            password2:"", 
            title:""
        }
    }
   
    changeTitle= (e)=>{
        this.setState({title: e.currentTarget.value})
    }
    changeEmail = (e)=>{
        this.setState({email: e.currentTarget.value})
    }
    changePassword1 = (e)=>{
        this.setState({password1: e.currentTarget.value})
    }
    changePassword2 = (e)=>{
        this.setState({password2: e.currentTarget.value})
    }
    onRegister = ()=>{
        this.props.onRegister(this.state.email, this.state.password1, this.state.password2)
    }

    render() {
        const {classes, loginError, loginErrorProblem } = this.props
        return (
            <Grid container spacing={32}>
               <Grid item xs sm={2}></Grid>
               <Grid item xs>                                    
                   <Card>
                       <CardHeader
                           avatar={
                           <Avatar className={classes.avatar}>
                               L
                           </Avatar>
                           }
                           title="Log In"
                           subheader="Register to access your team or league"
                           // className={classes.cardHeader}
                       />
                       <CardContent>
                               <FormGroup>
                                   <TextField
                                       id="name"
                                       label="Full Name"
                                       className={classes.textField}
                                       type="text"
                                       value={this.state.title}
                                       onChange={this.changeTitle}
                                       // autoComplete="email-address"
                                       // margin="normal"
                                   />
                                   <TextField
                                       id="email"
                                       label="Email Address"
                                       className={classes.textField}
                                       type="email"
                                       value={this.state.email}
                                       onChange={this.changeEmail}
                                       // autoComplete="email-address"
                                       // margin="normal"
                                   />
                                   <TextField
                                       id="password1"
                                       label="Password1"
                                       className={classes.textField}
                                       type="password"
                                       value={this.state.password1}
                                       onChange={this.changePassword1}
                                       // autoComplete="current-password"
                                       // margin="normal"
                                   />
                                   <TextField
                                       id="password2"
                                       label="Password2"
                                       className={classes.textField}
                                       type="password"
                                       value={this.state.password2}
                                       onChange={this.changePassword2}
                                       // autoComplete="current-password"
                                       // margin="normal"
                                   />
                               </FormGroup>
                                Already registered? <Button className={classes.button}>Log In</Button>
                       </CardContent>
                       <CardActions className={classes.actions} disableActionSpacing>     
                           <Button className={classes.button}>Cancel</Button>
                      
                           <Button variant="contained" color="primary" className={classes.signin} onClick={this.onRegister}>
                               Register
                           </Button>
                       </CardActions>
                   </Card>
                   {this.props.loginError && this.props.loginErrorProblem}
               </Grid>
               <Grid item xs sm={2}></Grid>
           </Grid>
        );
    }
}



export default withStyles(JSStyle)(RegisterForm);