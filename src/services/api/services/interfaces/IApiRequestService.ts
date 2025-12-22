// src/interfaces/IApiRequestService.ts

export interface IApiRequestService {
    setToken(accessToken: string): void;
    get<T>(path: string, auth?: boolean): Promise<T>;
    post<T>(path: string, data: any, auth?: boolean): Promise<T>;
    put<T>(path: string, data: any, auth?: boolean): Promise<T>;
    patch<T>(path: string, data?: any, auth?: boolean): Promise<T>;
    delete<T>(path: string, auth?: boolean): Promise<T>;
}
