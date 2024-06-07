import { UserAuthData, UserSignupData, refreshData } from "../../DTO/request";
import {UserAuthResponse} from '../../DTO/response'

export interface IAuthServices {
    login(data: UserAuthData) : Promise<UserAuthResponse>;
    register(data: UserSignupData) : Promise<any>;
    refresh(data: refreshData) : Promise<any>;
    desactivate(path: string) : Promise<any>
}