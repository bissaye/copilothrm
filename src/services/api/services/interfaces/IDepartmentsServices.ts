import { DepartmentApiResponse } from "../../DTO/response";

export interface IDepartmentsServices {
    getAllDepartments(organisationId: string, pageNumber: number, size: number): Promise<DepartmentApiResponse>
}