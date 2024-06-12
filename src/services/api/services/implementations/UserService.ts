import { ChangeUserPasswordData, UpdateUserData } from "../../DTO/request";
import { ChangeUserPasswordResponse } from "../../DTO/response";
import { IApiRequestService } from "../interfaces";
import { IUserServices } from "../interfaces/IUserServices";

export class UserServices implements IUserServices {

    private apiService: IApiRequestService;

    constructor(apiService: IApiRequestService) {
        this.apiService = apiService;
    }

    public async updateUserProfile(user: UpdateUserData): Promise<any> {
        const response: any = this.apiService.put<any>("/staff/", user)
        return response;
    }

    public async changePassword(data: ChangeUserPasswordData): Promise<ChangeUserPasswordResponse> {
        const response: ChangeUserPasswordResponse = await this.apiService.post<ChangeUserPasswordResponse>("/user/changePassword", data, true)
        return response;
    }
}