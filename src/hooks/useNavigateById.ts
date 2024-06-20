import { useNavigate } from "react-router-dom";
import { allRoutes } from "../services/routes"
import { useCallback } from "react";

const getPathById = (id: string): string | undefined => {
    const  route = Object.values(allRoutes).find(route => route.id === id);
    return route?.path;
}

export const useNavigateById = () => {
    const navigate = useNavigate();

    const navigatById = useCallback((id: string, data?: any) => {
        const path = getPathById(id);
        if(path){
            if(data){
                navigate(`${path}`, {state: data });
            }
            else{
                navigate(path);
            }
        }else{
            console.error(`Route not found for ID: ${id}`);
        }
    }, [navigate]);

    return navigatById;
}