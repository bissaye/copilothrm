import { InvitedUserSignupDatas, JoinOrganisation } from "../DTO/request";
import { BaseApiResponse } from "../DTO/response";
import { IStaffService } from "../services/interfaces";

export const useStaffUseCase = (staffService: IStaffService | null) => {
    
    const getUserOrganisations = async () => {
        try{
            if(staffService){
                const response = await staffService.getOrganisations()
                return response;
            }
            else {
                throw new Error("erreur staffServices not set");
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
    
    const joinOrganisation = async (token: string) => {
        try{
            if(staffService){
                const response: BaseApiResponse = await staffService.joinOrganisation(token)
                return response;
            }
            else {
                throw new Error("erreur staffServices not set");
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

    const addStaffUser = async (data: InvitedUserSignupDatas) => {
        try{
            if(staffService){
                const response: BaseApiResponse = await staffService.addNewUserToOrganisation(data)
                return response;
            }
            else {
                throw new Error("erreur staffServices not set");
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
        getUserOrganisations,
        joinOrganisation,
        addStaffUser
    }
}