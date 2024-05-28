import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import { usePageStore } from "../../../../services/store";
import { allRoutes } from "../../../../services/routes";



export const PageTracker: React.FC = () => {

    const location = useLocation();
    const {setPage} = usePageStore();

    useEffect(() => {
        const currentPage = Object.values(allRoutes).find(route => route.path === location.pathname);
        if (currentPage) {
            setPage(currentPage.id);
        }
    }, [location])

    return null;
}