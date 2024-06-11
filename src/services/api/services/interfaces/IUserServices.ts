import { ChangeUserPasswordData } from "../../DTO/request"
import { ChangeUserPasswordResponse } from "../../DTO/response"

export interface IUserServices {
    updateProfile(user: any): Promise<ChangeUserPasswordResponse>
    changePassword(data: ChangeUserPasswordData): Promise<any>
}