import { JoinOrganisation } from "../../DTO/request";
import { BaseApiResponse } from "../../DTO/response";
import { IApiRequestService, IStaffService } from "../interfaces";

export class StaffServices implements IStaffService {

    private apiService: IApiRequestService;

    constructor(apiService: IApiRequestService) {
        this.apiService = apiService;
    }
    
    public async joinOrganisation(data: JoinOrganisation): Promise<any> {
        const response: BaseApiResponse = await this.apiService.post<BaseApiResponse>('/staff/join', data, true)
        return response;
    }
    
}