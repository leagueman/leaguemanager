
import CreateDivisions from './CreateDivisions'
import Step2 from './Step2'
import Step3 from './Step3'

export const steps = [
    {
        title:"Create Divisions",
        helperText: "Create a number of divisions. You can change this again in a moment if necessary",
        component: CreateDivisions,
    },
    {
        title:"Add Teams to Divisions",
        helperText: "Choose which teams belong in which division.",
        component: Step2,
    },
    {
        title:"Step 3",
        helperText: "This is step 3",
        component: Step3,
    },
    {
        title:"Step 4",
        helperText: "This is step 4",
        component: Step3,
    },
]

export default steps