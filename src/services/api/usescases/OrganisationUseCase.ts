import { OrganizationData } from "../DTO/request";
import { IOrganizationServices } from "../services/interfaces";

export const useOrganisationUseCase = (orgServices: IOrganizationServices | null) => {
    
    const addOrganisation = async (data: OrganizationData) => {
        try{
            if(orgServices){
                const response = await orgServices.addOrganisation(data)
                return response;
            }
            else {
                throw new Error("erreur orgServices not set");
              }
        }
        catch (err: any) {
            if(err.response.data.message) {
              const message = err.response.data.message;
              throw new Error(String(message))
            }
            throw new Error(String(err));
        }
    }

    return {
        addOrganisation
    }
}