import { apiClient } from "../../apiClient";
import { IApiRequestService } from "../interfaces/";




export class ApiRequestService implements IApiRequestService {

    private static instance: ApiRequestService;
    private token: string | null = localStorage.getItem("token"); 
    private apiClient = apiClient;

    private constructor() {}

    public static getInstance(): ApiRequestService {
        if (!ApiRequestService.instance) {
            ApiRequestService.instance = new ApiRequestService();
        }
        return ApiRequestService.instance;
    }

    public setToken(accessToken: string) {
        this.token = accessToken;
    }

    public async get<T>(path: string, auth: boolean = false): Promise<T> {

        if (auth) {
            this.apiClient.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
        }
        const response = await this.apiClient.get<T>(path);
        return response.data as T;

    }

    public async post<T>(path: string, data: any, auth: boolean = false): Promise<T> {

        if (auth) {
            this.apiClient.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
        }
        console.log("HEADER ", this.token)
        const response = await this.apiClient.post<T>(path, data);
        return response.data as T;
    }

    public async put<T>(path: string, data: any, auth: boolean = false): Promise<T> {

        if (auth) {
            this.apiClient.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
        }
        const response = await this.apiClient.put<T>(path, data);
        return response.data as T;

    }

    public async delete<T>(path: string, auth: boolean = false): Promise<T> {

        if (auth) {
            this.apiClient.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
        }
        const response = await this.apiClient.delete<T>(path);
        return response.data as T;
    }

}
