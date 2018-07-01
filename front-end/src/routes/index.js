import HomeLayout from "../components/layout/HomeLayout";
import IsAdmin from "../components/containers/auth/IsAdmin";
import IsClubOfficial from "../components/containers/auth/IsClubOfficial";
import IsTeamManager from "../components/containers/auth/IsTeamManager";
import IsReferee from "../components/containers/auth/IsReferee";
import IsLeagueSecretary from "../components/containers/auth/IsLeagueSecretary";
import IsMember from "../components/containers/auth/IsMember";

const Routes = [
    { 
        path: "/member", 
        component: IsMember 
    },
    { 
        path: "/clubofficial", 
        component: IsClubOfficial 
    },
    { 
        path: "/teammanager", 
        component: IsTeamManager 
    },
    { 
        path: "/referee", 
        component: IsReferee 
    },
    { 
        path: "/leaguesecretary", 
        component: IsLeagueSecretary 
    },
    { 
        path: "/admin", 
        component: IsAdmin 
    },
    { 
        path: "/", 
        component: HomeLayout 
    },
];

export default Routes;
