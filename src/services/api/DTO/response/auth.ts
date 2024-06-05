
import { BaseApiRespone} from "./baseResponses";

export interface UserData {
    userId: string;
    username: string;
    derniereconnexion: string; 
    active: boolean;
    superAdmin: boolean;
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: UserData;
}

export interface UserAuthResponse extends BaseApiRespone {
    content : AuthResponse
}
