import MyClubLayout from '../components/containers/MyClub'
import LoginLayout from "../components/login/LoginLayout";
import ForgotPassword from "../components/login/ForgotPassword";
import RegisterLayout from "../components/register/RegisterLayout";

const Home = ()=>null
const Routes = [
    { 
        order:4,
        link: "Register",
        pageTitle: "Register",
        path: "/register", 
        component: RegisterLayout 
    },
    { 
        order:5,
        link: "Log In",
        pageTitle: "Log In",
        path: "/login", 
        component: LoginLayout 
    },
    { 
        order:0,
        link: "Forgot",
        pageTitle: "Forgot",
        path: "/forgot", 
        component: ForgotPassword 
    },
    { 
        order:0,
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
        component: Home 
    },
];

export default Routes;
