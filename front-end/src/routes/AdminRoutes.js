import Admin from "../components/layout/Admin";
import MyClub from "../components/containers/MyClub.js";
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';

const Routes = [
    { 
        order:2,
        link: "My Club",
        icon: DraftsIcon,
        pageTitle: "My CLub",
        path: "/admin/myclub", 
        component: MyClub 
    },
    {  
        order:1,
        link: "Admin Dashboard",
        icon: SendIcon,
        pageTitle: "Administration Dashboard",
        path: "/admin", 
        component: Admin 
    },
    {  
        order:0,
        link: "Home",
        icon: SendIcon,
        pageTitle: "Homepage",
        path: "/", 
        component: Admin 
    },
];

export default Routes;
