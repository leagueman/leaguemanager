import MainLayout from "../components/layout/MainLayout";
import UsersContainer from "../components/containers/UsersContainer";
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';
import React from 'react'

const Home = ()=><div>Admin</div>
const Routes = [
    { 
        order:2,
        link: "Users",
        icon: DraftsIcon,
        pageTitle: "Users",
        path: "/admin/users", 
        component: UsersContainer 
    },
    {  
        order:1,
        link: "Admin Dashboard",
        icon: SendIcon,
        pageTitle: "Administration Dashboard",
        path: "/admin", 
        component: Home  
    },
    {  
        order:0,
        link: "Home",
        icon: SendIcon,
        pageTitle: "Homepage",
        path: "/", 
        component: MainLayout 
    },
];

export default Routes;
