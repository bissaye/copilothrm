import { ChangeUserPasswordData, StaffInvitation, UpdateUserData } from "../DTO/request";
import { StaffResponse } from "../DTO/response";
import { IUserServices } from "../services/interfaces/IUserServices";

export const useUserUseCase = (userServices: IUserServices | null) => {
    
    const getUserInfos = async (staffId: string) => {
        try{
            if(userServices){
                const response: StaffResponse = await userServices.getUserInfos(staffId)
                return response;
            }
            else {
                throw new Error("erreur userServices not set");
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
    
    const updateUserProfile = async (data: UpdateUserData) => {
        try{
            if(userServices){
                const response = await userServices.updateUserProfile(data)
                return response;
            }
            else {
                throw new Error("erreur userServices not set");
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

    const changeUserPassword = async (data: ChangeUserPasswordData) => {
        try{
            if(userServices){
                const response = await userServices.changePassword(data)
                return response;
            }
            else {
                throw new Error("erreur userServices not set");
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

    const activateUserAccount = async (token: string) => {
        try{
            if(userServices){
                const response = await userServices.activateUserAccount(token)
                return response;
            }
            else {
                throw new Error("erreur userServices not set");
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

    const inviteUser = async (data: StaffInvitation) => {
        try{
            if(userServices){
                const response = await userServices.inviteUser(data)
                return response;
            }
            else {
                throw new Error("erreur userServices not set");
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
        updateUserProfile,
        changeUserPassword,
        activateUserAccount,
        getUserInfos,
        inviteUser
    }
}