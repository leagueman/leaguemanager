import Home from "../components/layout/Home.js";
import Admin from "../components/layout/Admin";
const Routes = [
    { 
        link: "Admin Dashboard",
        pageTitle: "Administration Dashboard",
        path: "/admin", 
        component: Admin 
    },
    { 
        link: "Home",
        pageTitle: "League Manager",
        path: "/", 
        component: Home 
    },
];

export default Routes;
