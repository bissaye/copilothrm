export  type AppRoute = {
    id: string;
    path : string;
    authRequired : boolean;
    element: JSX.Element;
}