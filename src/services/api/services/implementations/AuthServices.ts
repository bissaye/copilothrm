import { UserAuthData, UserSignupData, refreshData } from "../../DTO/request";
import { UserAuthResponse, UserSignupResponse } from "../../DTO/response";
import { IAuthServices, IApiRequestService } from "../interfaces/";


export class AuthServices implements IAuthServices {

    private apiService: IApiRequestService;

    constructor(apiService: IApiRequestService) {
        this.apiService = apiService;
    }

    public async login(data: UserAuthData): Promise<UserAuthResponse> {
        const response : UserAuthResponse = await this.apiService.post<UserAuthResponse>("/auth/login" , data);    
        return response;
    }

    public async register(data: UserSignupData): Promise<any> {
        console.log(data);
        const response : UserSignupResponse = await this.apiService.post<UserSignupResponse>("/organisation/withManager" , data);    
        return response;
    }

    refresh( data: refreshData): Promise<any> {
        console.log( data);
        throw new Error("Method not implemented.");
    }

    desactivate(): Promise<any> {

        throw new Error("Method not implemented.");
    }

}