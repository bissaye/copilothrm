import { BaseApiResponse } from "./baseResponses";

export interface UserChangePassword {
    userId: string,
    username: string,
    derniereconnexion: string,
    active: boolean,
    superAdmin: boolean
}

export interface UserExists {
    userId: string,
    username: string,
    derniereconnexion: string,
    active: boolean,
    superAdmin: boolean
}

export interface ChangeUserPasswordResponse extends BaseApiResponse {
    content: UserChangePassword
}

export interface UserExistsResponse extends BaseApiResponse {
    content: UserExists
}