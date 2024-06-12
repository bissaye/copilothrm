import { ChangeUserPasswordData, UpdateUserData } from "../../DTO/request"
import { ChangeUserPasswordResponse } from "../../DTO/response"

export interface IUserServices {
    updateUserProfile(user: UpdateUserData): Promise<any>
    changePassword(data: ChangeUserPasswordData): Promise<ChangeUserPasswordResponse>
}