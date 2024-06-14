import { ChangeUserPasswordData, UpdateUserData } from "../../DTO/request"
import { BaseApiResponse, ChangeUserPasswordResponse } from "../../DTO/response"

export interface IUserServices {
    getUserInfos(userId: string): Promise<any>
    updateUserProfile(user: UpdateUserData): Promise<any>
    changePassword(data: ChangeUserPasswordData): Promise<ChangeUserPasswordResponse>
    activateUserAccount(token: string): Promise<BaseApiResponse>;
}