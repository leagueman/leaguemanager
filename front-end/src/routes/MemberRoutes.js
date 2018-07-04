import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import React from 'react'
const Fixtures = ()=>{return null}
const Results = ()=>{return null}
const Teams = ()=>{return null}
const Tables = ()=>{return null}
const Players = ()=>{return null}
const MemberHome = ()=>{return <h1>Members Dashboard</h1>}


const Routes = [
    { 
        order:8,
        link: "Tables",
        icon: DraftsIcon,
        pageTitle: "Tables",
        path: "/member/tables", 
        component: Tables
    },
    { 
        order:7,
        link: "Results",
        icon: DraftsIcon,
        pageTitle: "Results",
        path: "/member/results", 
        component: Results
    },
    { 
        order:6,
        link: "Fixtures",
        icon: DraftsIcon,
        pageTitle: "Fixtures",
        path: "/member/fixtures", 
        component: Fixtures
    },
    { 
        order:5,
        link: "Players",
        icon: DraftsIcon,
        pageTitle: "Players",
        path: "/member/players", 
        component: Players
    },
    { 
        order:3,
        link: "Teams",
        icon: DraftsIcon,
        pageTitle: "Teams",
        path: "/member/teams", 
        component: Teams
    },
    {  
        order:1,
        link: "MainLayout",
        icon: SendIcon,
        pageTitle: "Member",
        path: "/member", 
        component: MemberHome 
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
