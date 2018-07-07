import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Stepper,Step,StepLabel,Button,Typography, Paper} from '@material-ui/core';
import Finished from './NewLeague/Finished'
import steps from './NewLeague/steps'

const styles = theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  activeStepComponent:{
    padding: theme.spacing.unit*2,
  }
});


class NewLeague extends Component {

    state = {
        activeStep: 0,
    };

    handleNext=()=>{
        this.setState((prevState) => ({
            activeStep: prevState.activeStep + 1
        }));
    }

    handleBack=()=>{
        this.setState((prevState)=>({
            activeStep: prevState.activeStep - 1
        }));
    }

    handleReset=()=>{
        this.setState({activeStep: 0});
    }

    onChange=(name, value)=>{
        this.setState({[name]:value})
    }

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        let stepIcons = steps.map((step, key) => (
            <Step key={key}>
                <StepLabel>{step.title}</StepLabel>
            </Step>
            )
        )

        let finished = this.state.activeStep === steps.length
        let ActiveStepComponent = finished ? Finished : steps[activeStep].component
        return (
            <div className={classes.root}>

                <Paper className={classes.activeStepComponent} >
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {stepIcons}
                    </Stepper>
                    <ActiveStepComponent onChange={this.onChange.bind(this)} divisions={this.state.divisions}/>
                </Paper>

                <div>
                    <Typography className={classes.instructions}>
                        {finished ? "All steps completed - you're finished" : steps[activeStep].helperText }                                    
                    </Typography>
                        {finished 
                            ? <Button onClick={this.handleReset}>Reset</Button> 
                            : (  <div>                        
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.backButton}
                                    >
                                        Back
                                    </Button>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        onClick={this.handleNext}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            ) 
                        }
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(NewLeague);