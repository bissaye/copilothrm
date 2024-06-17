import { useEffect, useState } from "react";
import { toastify } from "../../../utils/toasts";
import { useIntl } from "react-intl";
import { useNavigateById } from "../../../hooks";
import { useApiServices } from "../../../services/api/ApiServiceContext";
import { useFormUseCase } from "../../../services/api/usescases";
import { useSignupStore, useSpinnerStore } from "../../../services/store";

export const AddOrganisation: React.FC = () => {
    const {formatMessage} = useIntl();
    const navigateById = useNavigateById();
    const {formServices} = useApiServices()
    const {initSignupForm} = useFormUseCase(formServices);
    const {showSpinner, hideSpinner} = useSpinnerStore()

    const {initCountryList, initIndustryList, initTailleEntrepriseList} = useSignupStore();

    const [signupStep, setSignupStep] = useState< 1 | 2 | 3 | 4 >(1);

    const nextStep = () => {
        setSignupStep(signupStep + 1 as  1 | 2 | 3 | 4 );
    }

    const prevStep = () => {
        setSignupStep(signupStep - 1 as  1 | 2 | 3 | 4 )
    }

    useEffect(() => {
        async function getSignupDatas() {
            showSpinner(formatMessage({id:"init_form"}))
            try{
                await initSignupForm().then(response => {
                    initCountryList(response!.countryList)
                    initIndustryList(response!.industryLise)
                    initTailleEntrepriseList(response!.tailleEntrepriseLsit)
                    hideSpinner()
                })
            }
            catch(error: any){
                hideSpinner()
                toastify('error', error.message)
            }
        }
        getSignupDatas()
    }, [])
    return <div className="bg-red-300 flex flex-col justify-center items-center w-screen h-screen">
        <h1 className="text-t10 font-bold">Add an organisation</h1>
    </div>
}