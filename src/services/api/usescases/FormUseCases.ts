import { SignupFormInitDatas } from "../DTO/response";
import { IFormServices } from "../services/interfaces";


export const useFormUseCase = (formServices: IFormServices | null) => {
    const initSignupForm = async () => {
        try{
            if(formServices){
                const countryListResponse = await formServices.getAllCountries()
                const industryListResponse = await formServices.getAllIndustries()
                const tailleEntrepriseListResponse = await formServices.getTailleEntreprise()
                const formInitDatas: SignupFormInitDatas = {
                    countryList: countryListResponse.content ,
                    industryLise: industryListResponse.content,
                    tailleEntrepriseLsit: tailleEntrepriseListResponse.content,
                }
                return formInitDatas
            }
            else {
                throw new Error("erreur formServices not set");
            }
        }
        catch(error: any){

        }
    }

    return {
        initSignupForm
    }
}