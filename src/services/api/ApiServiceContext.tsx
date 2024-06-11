import React, { createContext, useContext } from "react";
import { ApiRequestService } from "./services/implementations/ApiRequestService";
import { IApiRequestService, IAuthServices, IUserServices } from "./services/interfaces";
import { AuthServices } from "./services/implementations/AuthServices";
import { UserServices } from "./services/implementations";


const ApiServicesContext = createContext<{
    authService: IAuthServices | null;
    userServices: IUserServices | null;
}>({
    authService:null,
    userServices: null
})

export const ApiServiceProvider: React.FC<{ children: React.ReactNode}> = ({children}) => {

    const apiRequestService : IApiRequestService = ApiRequestService.getInstance();
    
    const authService : IAuthServices = new AuthServices(apiRequestService);

    const userServices: IUserServices = new UserServices(apiRequestService)

    return <ApiServicesContext.Provider value={{authService, userServices}}>
        {children}
    </ApiServicesContext.Provider>
}

export const useApiServices = () => {
    const context = useContext(ApiServicesContext);
    if (!context) {
        throw new Error("useApiUseCases must be used within an ApiUseCasesProvider");
    }
    return context;
};