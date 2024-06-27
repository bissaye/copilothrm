import { DepartmentApiResponse } from "../../DTO/response";
import { IApiRequestService, IDepartmentsServices } from "../interfaces";

export class DepartmentsServices implements IDepartmentsServices {
    private apiService: IApiRequestService;

    constructor(apiService: IApiRequestService) {
        this.apiService = apiService;
    }

    async getAllDepartments(organisationId: string, pageNumber: number, size: number): Promise<DepartmentApiResponse> {
        const response: any = await this.apiService.get<DepartmentApiResponse>(`/departement/organisation/${organisationId}?pageNumber=${pageNumber}&size=${size}`, true)
        return response;
    }
}