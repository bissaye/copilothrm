import { IDepartmentsServices } from "../services/interfaces";

export const useDepartmentUseCases = (departmentServices: IDepartmentsServices | null) => {
    
    const getDepartments = async (orgId: string, pageNumber: number, size: number) => {
        try{
            if(departmentServices){
                const response = await departmentServices.getAllDepartments(orgId, pageNumber, size)
                return response;
            }
            else {
                throw new Error("erreur departmentServices not set");
            }
        }
        catch (err: any) {
            if(err.response.status == 404){
                throw new Error(String("Aucune département trouvé"))
            }
            else if(err.response.data.message) {
              const message = err.response.data.message;
              throw new Error(String(message))
            }
            throw new Error(String(err));
        }
    }

    return {
        getDepartments
    }
}