import { ChangeUserPasswordData, UpdateUserData } from "../../DTO/request"
import { BaseApiResponse, ChangeUserPasswordResponse, UserExistsResponse } from "../../DTO/response"

export interface IUserServices {
    getUserInfos(userId: string): Promise<any>;
    updateUserProfile(user: UpdateUserData): Promise<any>;
    changePassword(data: ChangeUserPasswordData): Promise<ChangeUserPasswordResponse>;
    activateUserAccount(token: string): Promise<BaseApiResponse>;
    checkUserExists(username: string): Promise<UserExistsResponse>
}