import React, { createContext, useContext } from "react";
import { ApiRequestService } from "./services/implementations/ApiRequestService";
import { IApiRequestService, IAuthServices, IFormServices, IInvitationServices, IOrganizationServices, IUserServices } from "./services/interfaces";
import { AuthServices } from "./services/implementations/AuthServices";
import { FormServices, InvitationService, UserServices } from "./services/implementations";
import { OrganizationService } from "./services/implementations/OrganizationService";


const ApiServicesContext = createContext<{
    authService: IAuthServices | null;
    userServices: IUserServices | null;
    formServices: IFormServices | null;
    orgServices: IOrganizationServices | null;
    invitationService: IInvitationServices | null;
}>({
    authService:null,
    userServices: null,
    formServices: null,
    orgServices: null,
    invitationService: null
})

export const ApiServiceProvider: React.FC<{ children: React.ReactNode}> = ({children}) => {

    const apiRequestService : IApiRequestService = ApiRequestService.getInstance();
    
    const authService : IAuthServices = new AuthServices(apiRequestService);

    const userServices: IUserServices = new UserServices(apiRequestService);

    const formServices: IFormServices = new FormServices(apiRequestService);

    const orgServices: IOrganizationServices = new OrganizationService(apiRequestService);
    
    const invitationService: IInvitationServices = new InvitationService(apiRequestService);

    return <ApiServicesContext.Provider value={{
        authService, 
        userServices,
        formServices,
        orgServices,
        invitationService
        }}>
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