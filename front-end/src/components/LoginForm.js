import React, {Component, Fragment} from 'react';
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Icon from '@material-ui/core/Icon'
import JSStyle from '../assets/jss/JSStyle'
import { withStyles } from '@material-ui/core/styles'

class LoginForm extends Component {
    constructor(){
        super()
        this.state = {
            email:"",
            password:"",
            // SnackbarOpen:true,
            // SnackbarMessage:"",
        }
    }
   
    changeEmail = (e)=>{
        this.setState({email: e.currentTarget.value})
    }
    changePassword = (e)=>{
        this.setState({password: e.currentTarget.value})
    }
    onLogin = ()=>{
        this.props.onLogin(this.state.email, this.state.password)
    }

    handleSnackbarClose = ()=>{
        this.props.onError(false, '')
    }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     return nextProps.loginError !== prevState.SnackbarOpen ?  {SnackbarOpen: nextProps.loginError, SnackbarMessage:nextProps.loginErrorProblem } : {}
    // }

    showsnack = () =>{
        console.log("SNACK")
        this.setState({
            SnackbarMessage:'testing',
            SnackbarOpen:true
        })
    }

    render() {
        const {classes} = this.props
        
        return (     
                <Fragment>                      
                   <Card>
                       <CardHeader
                           avatar={
                           <Avatar className={classes.avatar}>
                               L
                           </Avatar>
                           }
                           title="Log In"
                           subheader="Login to access your team or league"
                           // className={classes.cardHeader}
                       />
                       <CardContent>
                               <FormGroup>
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
                                       id="password"
                                       label="Password"
                                       className={classes.textField}
                                       type="password"
                                       value={this.state.password}
                                       onChange={this.changePassword}
                                       // autoComplete="current-password"
                                       // margin="normal"
                                   />
                               </FormGroup>
                                <Button className={classes.button}>Forgot Password</Button>
                                <Button className={classes.button}>Register</Button>
                       </CardContent>
                       <CardActions className={classes.actions} disableActionSpacing>     
                           <Button className={classes.button}>Cancel</Button>
                      
                           <Button variant="contained" color="primary" className={classes.signin} onClick={this.onLogin}>
                               Login
                           </Button>
                       </CardActions>
                   </Card>

                   
                    <Snackbar
                        anchorOrigin={{vertical:'top', horizontal:'center'}}
                        open={this.props.loginError}
                        onClose={this.handleSnackbarClose}
                        autoHideDuration={2500}
                        message={this.props.loginErrorProblem}
                    />      

                   </Fragment>
        );
    }
}



export default withStyles(JSStyle)(LoginForm);