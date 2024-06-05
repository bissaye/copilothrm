import { UserAuthData, UserSignupData, refreshData } from "../../DTO/request";
import {AuthResponse} from '../../DTO/response'

export interface IAuthServices {
    login(data: UserAuthData) : Promise<AuthResponse>;
    register(data: UserSignupData) : Promise<any>;
    refresh(data: refreshData) : Promise<any>;
    desactivate(path: string) : Promise<any>
}