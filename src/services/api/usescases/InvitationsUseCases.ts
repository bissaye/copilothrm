import { StaffInvitation } from "../DTO/request";
import { IInvitationServices } from "../services/interfaces";

export const useInvitationUseCase = (invitationServices: IInvitationServices | null) => {

    const getAllInvitations = async (orgId: string, pageNumber: number, size: number) => {
        try{
            if(invitationServices){
                const response = await invitationServices.getAllInvitations(orgId, pageNumber, size)
                return response;
            }
            else {
                throw new Error("erreur invitationServices not set");
            }
        }
        catch (err: any) {
            if(err.response.status == 404){
                throw new Error(String("Aucune invitation envoyées"))
            }
            else if(err.response.data.message) {
              const message = err.response.data.message;
              throw new Error(String(message))
            }
            throw new Error(String(err));
        }
    }

    const sendInvitation = async (data: StaffInvitation) => {
        try{
            if(invitationServices){
                const response = await invitationServices.sendInvitation(data)
                return response;
            }
            else {
                throw new Error("erreur invitationServices not set");
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
        getAllInvitations,
        sendInvitation
    }
}