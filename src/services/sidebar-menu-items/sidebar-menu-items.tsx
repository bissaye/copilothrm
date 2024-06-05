import { faEnvelope, faFolder, faMessage, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import { faChartPie, faGear, faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { managerRoutes } from "../routes";

export const MANAGER_SIDEBAR_MENU_ITEMS = [
    {
        title: "dashboard",
        icon: faChartPie,
        path: managerRoutes.HomePage.path,
        id: managerRoutes.HomePage.id
    },
    {
        title: "departments",
        icon: faFolder,
        path: managerRoutes.Departments.path,
        id: managerRoutes.Departments.id
    },
    {
        title: "teams",
        icon: faUsersLine,
        path: managerRoutes.Teams.path,
        id: managerRoutes.Teams.id
    },
    {
        title: "invitations",
        icon: faEnvelope,
        path: managerRoutes.Invitations.path,
        id: managerRoutes.Invitations.id
    },
    {
        title: "messages",
        icon: faMessage,
        path: managerRoutes.Messages.path,
        id: managerRoutes.Messages.id
    },
    {
        title: "settings",
        icon: faGear,
        path: managerRoutes.Settings.path,
        id: managerRoutes.Settings.id
    },
    {
        title: "payments",
        icon: faMoneyBill1,
        path: managerRoutes.Payments.path,
        id: managerRoutes.Payments.id
    }
]