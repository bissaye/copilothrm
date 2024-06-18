import { AppRoute } from "../../utils/interfaces/type"
import { HomePage , SignInPage, SignUpPage, LandingPage, ChooseOrg, SignUpFromInvitationPage, ForgotPasswordPage, InvitationPage, UserProfilePage, AddOrganisation} from "../../views/pages";
import { pageIds } from "../../utils/constantes";
import { ActivateAccount } from "../../views/pages/activateAccount";



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
    SignUpFromInvitationPage :{
        id: pageIds.SignUpFromInvitationPage,
        path: "/signup-from-invitation",
        authRequired: false,
        element: <SignUpFromInvitationPage/>
    },
    ForgotPasswordPage:{
        id: pageIds.ForgotPasswordPage,
        path: "/resetPasswword",
        authRequired: false,
        element: <ForgotPasswordPage/>
    },
    ActivateAccountPage:{
        id: pageIds.ActivateAccount,
        path: "/activation",
        authRequired: false,
        element: <ActivateAccount/>
    }
}

export const managerRoutes : Record<string, AppRoute> = {
    ChooseOrg:{
        id: pageIds.ChooseOrg,
        path: "/home/choose-org",
        authRequired: true,
        element: <ChooseOrg/>
    },
    HomePage:{
        id: pageIds.HomePage,
        path: "/home/org-home",
        authRequired: true,
        element: <HomePage/>
    },
    Profile:{
        id: pageIds.Profile,
        path: "/home/org-home/user-profile",
        authRequired: true,
        element: <UserProfilePage/>
    },
    Departments:{
        id: pageIds.Departments,
        path: "/home/org-home/departments",
        authRequired: true,
        element: <HomePage/>
    },
    Teams:{
        id: pageIds.Teams,
        path: "/home/org-home/teams",
        authRequired: true,
        element: <HomePage/>
    },
    Invitations:{
        id: pageIds.Invitations,
        path: "/home/org-home/invitations",
        authRequired: true,
        element: <InvitationPage/>
    },
    Messages:{
        id: pageIds.Messages,
        path: "/home/org-home/messages",
        authRequired: true,
        element: <HomePage/>
    },
    Settings:{
        id: pageIds.Settings,
        path: "/home/org-home/settings",
        authRequired: true,
        element: <HomePage/>
    },
    Payments:{
        id: pageIds.Payments,
        path: "/home/org-home/payments",
        authRequired: true,
        element: <HomePage/>
    },
    AddOrganisation: {
        id: pageIds.AddOrganisation,
        path: "/home/addOrganisation",
        authRequired: true,
        element: <AddOrganisation />
    }
}

export const allRoutes : Record<string, AppRoute> = {
    ...publicRoutes,
    ...managerRoutes
}
