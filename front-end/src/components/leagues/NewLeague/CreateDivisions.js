import React from 'react';
import { Card, TextField, Grid } from '@material-ui/core';

class Division extends React.Component{
    state= {["div_"+this.props.index]:''}

    onChangeName = (e)=>{
        let {name, value} = e.target
        this.setState({[name]:value})
        this.props.onChangeName(name,value)
    }
    componentDidMount(){
        let {data} = this.props
        if( data 
            && data.name
            && data.value   
        ) this.setState({[data.name]:data.value})
    }
    render(){
    return (
        <Grid item xs={12} sm={12} md={6} lg={3}> 
            <Card>
                <TextField
                    name={"div_"+this.props.index}
                    value={this.state["div_"+this.props.index]}
                    onChange={this.onChangeName}
                />
            </Card>
        </Grid>
    )}
}
    


class CreateDivisions extends React.Component {
    state={
        divisions:this.props.divisions || [{}]
    }

    onChangeName = (name, value)=>{
        let divisions = [...this.state.divisions]
        let found = false
        divisions.forEach(element => {
            if(element.name===name){
                element.value=value
                found=true
            }
        });
        if(!found) divisions.push({name, value})
        this.setState({divisions})
        this.props.onChange('divisions', divisions) 


        
        let divisionsObject = {}
        for(let d of this.state.divisions){
            if(d.value) divisionsObject[d.value] = []
        }

        this.props.onChange('divisionsObject', divisionsObject) 
    }

    componentWillUnmount(){
        console.log("SAVE", this.state)
    }

    render(){
        let newDivisions = this.state.divisions.map((el, key)=>{
            let nextEl = this.state.divisions[key+1] || {}
            return <Division onChangeName={this.onChangeName.bind(this)} index={key} data={nextEl} key={key} />
        })
        return (
            <div>
                <Grid container spacing={16}>
                    Its important to put the divisions in order as promotion and relegation will follow this order. Also note that adding a division will clear the teams from all divisions.
                    {newDivisions}
                </Grid>
            </div>
        );
    }
};

export default CreateDivisions;