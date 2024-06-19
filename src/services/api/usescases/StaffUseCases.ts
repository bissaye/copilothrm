import { JoinOrganisation } from "../DTO/request";
import { BaseApiResponse } from "../DTO/response";
import { IStaffService } from "../services/interfaces";

export const useStaffUseCase = (staffService: IStaffService | null) => {
    
    const joinOrganisation = async (data: JoinOrganisation) => {
        try{
            if(staffService){
                const response: BaseApiResponse = await staffService.joinOrganisation(data)
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
        joinOrganisation
    }
}