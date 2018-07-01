import Home from '../components/layout/Home.js'
import Admin from '../components/layout/Admin'
import MyClub from '../components/containers/MyClub'
import Login from "../components/layout/Login";
import Register from "../components/layout/Register";

const Routes = [
    { 
        order:0,
        link: "Register",
        pageTitle: "Register",
        path: "/register", 
        component: Register 
    },
    { 
        order:4,
        link: "Log In",
        pageTitle: "Log In",
        path: "/login", 
        component: Login 
    },
    { 
        order:3,
        link: "Admin Dashboard",
        pageTitle: "Dashboard",
        path: "/admin", 
        component: Admin 
    },
    { 
        order:2,
        link: "My Club",
        pageTitle: "My Club",
        path: "/myclub", 
        component: MyClub 
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
