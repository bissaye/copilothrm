import { ChangeUserPasswordData, UpdateUserData } from "../DTO/request";
import { IUserServices } from "../services/interfaces/IUserServices";

export const useUserUseCase = (userServices: IUserServices | null) => {
    
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
                debugger
                const response = await userServices.changePassword(data)
                return response;
            }
            else {
                throw new Error("erreur authServices not set");
              }
        }
        catch (err: any) {
            debugger
            if(err.response.data.message) {
                debugger
              const message = err.response.data.message;
              throw new Error(String(message))
            }
            throw new Error(String(err));
        }
    }

    return {
        updateUserProfile,
        changeUserPassword
    }
}