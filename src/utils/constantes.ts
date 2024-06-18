import { AddOrganisation } from "../views/pages/organisation";

export const pageIds  = {
    LandingPage : "LandingPage",
    SignInPage : "SignInPage",
    SignUpPage : "SignUpPage",
    SignUpFromInvitationPage: "SignUpFromInvitation",
    ForgotPasswordPage: "ForgotPasswordPage",
    HomePage : "HomePage",
    DashboardPage: "DashboardPage",
    Departments: "DepartmentsPage",
    Teams: "TeamsPage",
    Invitations: "InvitationsPage",
    Messages: "MessagesPage",
    Settings: "SettingsPage",
    Payments: "PaymentsPage",
    ChooseOrg : "ChooseOrg",
    Profile : "Profile",
    ActivateAccount: "ActivateAccount",
    AddOrganisation: "AddOrganisation"
}

export const otpLength :number = 6;

export const api_base_url =  import.meta.env.VITE_API_URL;
