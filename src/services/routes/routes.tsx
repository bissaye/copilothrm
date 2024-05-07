import { AppRoute } from "../../utils/interfaces/type"
import { HomePage , SignInPage, SignUpPage, LandingPage} from "../../views/pages";

export const publicRoutes : Record<string, AppRoute> = {
    LandingPage : {
        id: "LandingPage",
        path: "/",
        authRequired: false,
        element: <LandingPage/>
    },

    SignInPage :{
        id: "SignInPage",
        path: "/signin",
        authRequired: false,
        element: <SignInPage/>
    },

    SignUpPage :{
        id: "SignUpPage",
        path: "/signup",
        authRequired: false,
        element: <SignUpPage/>
    },
}

export const managerRoutes : Record<string, AppRoute> = {
    HomePage:{
        id: "HomePage",
        path: "home",
        authRequired: true,
        element: <HomePage/>
    }
}
