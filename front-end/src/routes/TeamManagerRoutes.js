import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';

const Fixtures = ()=>{return null}
const Results = ()=>{return null}
const Teams = ()=>{return null}
const Tables = ()=>{return null}
const Players = ()=>{return null}


const Routes = [
    { 
        order:8,
        link: "Tables",
        icon: DraftsIcon,
        pageTitle: "Tables",
        path: "/teammanager/tables", 
        component: Tables
    },
    { 
        order:7,
        link: "Results",
        icon: DraftsIcon,
        pageTitle: "Results",
        path: "/teammanager/results", 
        component: Results
    },
    { 
        order:6,
        link: "Fixtures",
        icon: DraftsIcon,
        pageTitle: "Fixtures",
        path: "/teammanager/fixtures", 
        component: Fixtures
    },
    { 
        order:5,
        link: "Players",
        icon: DraftsIcon,
        pageTitle: "Players",
        path: "/teammanager/players", 
        component: Players
    },
    { 
        order:3,
        link: "Teams",
        icon: DraftsIcon,
        pageTitle: "Teams",
        path: "/teammanager/teams", 
        component: Teams
    },
    {  
        order:1,
        link: "MainLayout",
        icon: SendIcon,
        pageTitle: "Team Manager",
        path: "/teammanager", 
    },
    {  
        order:0,
        link: "Home",
        icon: SendIcon,
        pageTitle: "Homepage",
        path: "/", 
    },
];

export default Routes;
