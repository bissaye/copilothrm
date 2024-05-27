import { AppRoute } from "../../utils/interfaces/type"
import { HomePage , SignInPage, SignUpPage, LandingPage, ChooseOrg} from "../../views/pages";
import { pageIds } from "../../utils/constantes";



export const publicRoutes : Record<string, AppRoute> = {
    LandingPage : {
        id: pageIds.LandingPage,
        path: "/",
        authRequired: false,
        element: <LandingPage/>
    },

    SignInPage :{
        id: pageIds.SignInPage,
        path: "/signin",
        authRequired: false,
        element: <SignInPage/>
    },

    SignUpPage :{
        id: pageIds.SignUpPage,
        path: "/signup",
        authRequired: false,
        element: <SignUpPage/>
    },
}

export const managerRoutes : Record<string, AppRoute> = {
    HomePage:{
        id: pageIds.HomePage,
        path: "/home",
        authRequired: true,
        element: <HomePage/>
    },
    ChooseOrg:{
        id: pageIds.ChooseOrg,
        path: "/choose-org",
        authRequired: true,
        element: <ChooseOrg/>
    }
}

export const allRoutes : Record<string, AppRoute> = {
    ...publicRoutes,
    ...managerRoutes
}
