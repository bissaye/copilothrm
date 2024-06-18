import { useEffect, useState } from "react";
import { toastify } from "../../../utils/toasts";
import { useIntl } from "react-intl";
import { useNavigateById } from "../../../hooks";
import { useApiServices } from "../../../services/api/ApiServiceContext";
import { useFormUseCase } from "../../../services/api/usescases";
import { useOrganisationStore, useSpinnerStore } from "../../../services/store";
import { Stepper } from "../../components/common";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { LinkButton } from "../../components/ui";
import { pageIds } from "../../../utils/constantes";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";

export const AddOrganisation: React.FC = () => {
    const {formatMessage} = useIntl();
    const navigateById = useNavigateById();
    const {formServices} = useApiServices()
    const {initSignupForm} = useFormUseCase(formServices);
    const {showSpinner, hideSpinner} = useSpinnerStore()

    const {initCountryList, initIndustryList, initTailleEntrepriseList} = useOrganisationStore();

    const [addOrgStep, setAddOrgStep] = useState< 1 | 2 >(1);

    const nextStep = () => {
        setAddOrgStep(addOrgStep + 1 as  1 | 2 );
    }

    const prevStep = () => {
        setAddOrgStep(addOrgStep - 1 as  1 | 2 )
    }

    useEffect(() => {
        async function getAddOrgDatas() {
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
        getAddOrgDatas()
    }, [])
    
    return <div className="flex flex-col justify-center items-center w-screen h-screen">
        <h1 className="text-t8 font-bold">{formatMessage({id:"add_org"})}</h1>
        <Stepper currentStep={addOrgStep} steps={2} />
        { addOrgStep === 1 &&
            <Step1 handleSubmitNextStep={nextStep}/>
        }

        { addOrgStep === 2 &&
            <Step2 handleSubmitNextStep={nextStep} handlePrevStep={prevStep}/>
        }
        <LinkButton
            type="primary"
            text={formatMessage({id:"chhose_an_org"})}
            width={237}
            icon={faCircleLeft}
            onClick={() => navigateById(pageIds.ChooseOrg)}
            className="mb-5"
        />
    </div>
}