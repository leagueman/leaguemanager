import HomeLayout from "../components/layout/HomeLayout";
import IsAdmin from "../components/containers/auth/IsAdmin";
const Routes = [
    { 
        // link: "League Secretary",
        // pageTitle: "League Secretary",
        path: "/member", 
        component: HomeLayout 
    },
    { 
        // link: "League Secretary",
        // pageTitle: "League Secretary",
        path: "/clubofficial", 
        component: HomeLayout 
    },
    { 
        // link: "League Secretary",
        // pageTitle: "League Secretary",
        path: "/teammanager", 
        component: HomeLayout 
    },
    { 
        // link: "League Secretary",
        // pageTitle: "League Secretary",
        path: "/referee", 
        component: HomeLayout 
    },
    { 
        // link: "League Secretary",
        // pageTitle: "League Secretary",
        path: "/leaguesecretary", 
        component: HomeLayout 
    },
    { 
        // link: "Admin Dashboard",
        // pageTitle: "Administration Dashboard",
        path: "/admin", 
        component: IsAdmin 
    },
    { 
        // link: "Home",
        // pageTitle: "League Manager",
        path: "/", 
        component: HomeLayout 
    },
];

export default Routes;
