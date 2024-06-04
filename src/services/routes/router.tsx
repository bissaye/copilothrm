import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NotFoundPage } from "../../views/pages";
import { OrganizationBaseLayout, PublicBaseLayout } from "../../views/layouts";
import { useAuthStore } from "../store";
import { publicRoutes, managerRoutes} from "./routes";
import { PageTracker } from "../../views/components/common";


export const Router: React.FC = () => {
    const {isLogged} = useAuthStore();
    return (
    <BrowserRouter>
        <PageTracker/>
        <Routes>
            <Route path="*" element={<NotFoundPage/>} />
            
            <Route path={"/"} element={<PublicBaseLayout/>}>
                {
                    Object.entries(publicRoutes).map(([key, route]) => (
                        <Route key={key} id={route.id} path={route.path} element={route.element} />
                    ))
                }
            </Route>
            
            <Route path={"/home"} element={<OrganizationBaseLayout/>}>
            {
                Object.entries(managerRoutes).map(([rootKey, route]) => (
                    <Fragment key={rootKey}>
                        {
                            route.authRequired ?
                            <Route id={route.id} path={route.path} element={ isLogged ? route.element : <Navigate to={publicRoutes.SignInPage.path}/>} />
                            :
                            <Route id={route.id} path={route.path} element={route.element} />
                        }
                    </Fragment>
                ))
            }
            </Route>

        </Routes>
    </BrowserRouter>
    )
}