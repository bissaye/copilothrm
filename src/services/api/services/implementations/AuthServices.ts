import { UserAuthData, UserSignupData, refreshData } from "../../DTO/request";
import { UserAuthResponse , AuthResponse} from "../../DTO/response";
import { IAuthServices, IApiRequestService } from "../interfaces/";


export class AuthServices implements IAuthServices {

    private apiService: IApiRequestService;

    constructor(apiService: IApiRequestService) {
        this.apiService = apiService;
    }

    public async login(data: UserAuthData): Promise<AuthResponse> {
        const response : UserAuthResponse = await this.apiService.post<UserAuthResponse>("/auth/login" , data);    
        return response.content;    
    }

    register(data: UserSignupData): Promise<any> {
        console.log(data);
        throw new Error("Method not implemented.");
    }

    refresh( data: refreshData): Promise<any> {
        console.log( data);
        throw new Error("Method not implemented.");
    }

    desactivate(): Promise<any> {

        throw new Error("Method not implemented.");
    }

}