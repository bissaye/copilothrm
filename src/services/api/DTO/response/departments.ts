import { BaseApiResponse } from "./baseResponses";
import { StaffOrganisation } from "./staff";

export interface Department {
    departementID: string,
    organisation: StaffOrganisation,
    libelle: string,
    nbResponsable: number,
    pathBaseName: string
}

export interface DepartmentResponse {
    data: Department[],
    totalPage: number,
    numberOfElements: number,
    totalElements: number,
    pageNumber: number
}

export interface DepartmentApiResponse extends BaseApiResponse {
    content: DepartmentResponse
}