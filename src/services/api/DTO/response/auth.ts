
import { BaseApiResponse} from "./baseResponses";

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

export interface UserAuthResponse extends BaseApiResponse {
    content : AuthResponse
}

export interface UserSignupResponse extends BaseApiResponse {
    content : UserData
}
