
import CreateDivisions from './CreateDivisions'
import DivideTeams from './DivideTeams'
import Confirmation from './Confirmation'

export const steps = [
    {
        title:"Create Divisions",
        helperText: "Create a number of divisions. You can change this again in a moment if necessary",
        component: CreateDivisions,
    },
    {
        title:"Add Teams to Divisions",
        helperText: "Choose which teams belong in which division.",
        component: DivideTeams,
    },
    {
        title:"Confirmation",
        helperText: "Make sure you are happy with which division each team is playing in",
        component: Confirmation,
    },
]

export default steps