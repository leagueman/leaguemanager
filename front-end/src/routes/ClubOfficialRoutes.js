import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';

const Fixtures = ()=>{return null}
const Results = ()=>{return null}
const Teams = ()=>{return null}
const Tables = ()=>{return null}
const Players = ()=>{return null}
const Users = ()=>{return null}


const Routes = [
    { 
        order:7,
        link: "Players",
        icon: DraftsIcon,
        pageTitle: "Players",
        path: "/clubofficial/players", 
        component: Players
    },
    { 
        order:6,
        link: "Teams",
        icon: DraftsIcon,
        pageTitle: "Teams",
        path: "/clubofficial/teams", 
        component: Teams
    },
    { 
        order:3,
        link: "Tables",
        icon: DraftsIcon,
        pageTitle: "Tables",
        path: "/clubofficial/tables", 
        component: Tables
    },
    { 
        order:4,
        link: "Results",
        icon: DraftsIcon,
        pageTitle: "Results",
        path: "/clubofficial/results", 
        component: Results
    },
    { 
        order:5,
        link: "Fixtures",
        icon: DraftsIcon,
        pageTitle: "Fixtures",
        path: "/clubofficial/fixtures", 
        component: Fixtures
    },
    { 
        order:2,
        link: "Users",
        icon: DraftsIcon,
        pageTitle: "Users",
        path: "/clubofficial/users", 
        component: Users    /// WRAP IN HOC???
    },
    {  
        order:1,
        link: "Dashboard",
        icon: SendIcon,
        pageTitle: "Club Official",
        path: "/clubofficial", 
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
