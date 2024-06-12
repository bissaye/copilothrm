import { ActivateUserData, ChangeUserPasswordData, UpdateUserData } from "../../DTO/request"
import { BaseApiResponse, ChangeUserPasswordResponse } from "../../DTO/response"

export interface IUserServices {
    updateUserProfile(user: UpdateUserData): Promise<any>
    changePassword(data: ChangeUserPasswordData): Promise<ChangeUserPasswordResponse>
    activateUserAccount(data: ActivateUserData): Promise<BaseApiResponse>;
}