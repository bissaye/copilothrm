import React, { createContext, useContext } from "react";
import { ApiRequestService } from "./services/implementations/ApiRequestService";
import { IApiRequestService, IAuthServices } from "./services/interfaces";
import { AuthServices } from "./services/implementations/AuthServices";


const ApiServicesContext = createContext<{
    authService: IAuthServices  | null;
}>({authService:null})

export const ApiServiceProvider: React.FC<{ children: React.ReactNode}> = ({children}) => {

    const apiRequestService : IApiRequestService = ApiRequestService.getInstance();
    const authService : IAuthServices= new AuthServices(apiRequestService);


    return <ApiServicesContext.Provider value={{authService}}>
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