import { ChangeUserPasswordData, UpdateUserData } from "../../DTO/request";
import { BaseApiResponse, ChangeUserPasswordResponse, StaffResponse } from "../../DTO/response";
import { IApiRequestService } from "../interfaces";
import { IUserServices } from "../interfaces/IUserServices";

export class UserServices implements IUserServices {

    private apiService: IApiRequestService;

    constructor(apiService: IApiRequestService) {
        this.apiService = apiService;
    }

    public async getUserInfos(staffId: string): Promise<StaffResponse> {
        const response: StaffResponse = await this.apiService.get<StaffResponse>(`/staff/${staffId}`, true)
        return response;
    }

    public async updateUserProfile(user: UpdateUserData): Promise<any> {
        const response: any = this.apiService.put<any>("/staff/", user, true)
        return response;
    }

    public async changePassword(data: ChangeUserPasswordData): Promise<ChangeUserPasswordResponse> {
        const response: ChangeUserPasswordResponse = await this.apiService.post<ChangeUserPasswordResponse>("/user/changePassword", data, true)
        return response;
    }

    public async activateUserAccount(token: string): Promise<BaseApiResponse> {
        const response: BaseApiResponse = await this.apiService.patch<BaseApiResponse>(`/user/active/${token}`)
        return response;
    }

}