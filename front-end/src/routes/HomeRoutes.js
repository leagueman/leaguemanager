import HomeLayout from '../components/layout/HomeLayout'
import AdminLayout from '../components/layout/AdminLayout'
import MyClubLayout from '../components/containers/MyClub'
import LoginLayout from "../components/layout/LoginLayout";
import RegisterLayout from "../components/layout/RegisterLayout";

const Routes = [
    { 
        order:0,
        link: "Register",
        pageTitle: "Register",
        path: "/register", 
        component: RegisterLayout 
    },
    { 
        order:4,
        link: "Log In",
        pageTitle: "Log In",
        path: "/login", 
        component: LoginLayout 
    },
    { 
        order:3,
        link: "Admin Dashboard",
        pageTitle: "Dashboard",
        path: "/admin", 
        component: AdminLayout 
    },
    { 
        order:2,
        link: "My Club",
        pageTitle: "My Club",
        path: "/myclub", 
        component: MyClubLayout
     
    },
    { 
        order:1,
        link: "Home",
        pageTitle: "League Manager",
        path: "/", 
        component: HomeLayout 
    },
];

export default Routes;
