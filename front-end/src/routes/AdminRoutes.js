import AdminLayout from "../components/layout/AdminLayout";
import HomeLayout from "../components/layout/HomeLayout";
import UsersContainer from "../components/containers/UsersContainer";
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';

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
        component: AdminLayout 
    },
    {  
        order:0,
        link: "Home",
        icon: SendIcon,
        pageTitle: "Homepage",
        path: "/", 
        component: HomeLayout 
    },
];

export default Routes;
