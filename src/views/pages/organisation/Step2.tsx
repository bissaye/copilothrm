import { useIntl } from "react-intl";
import { DefaultButton } from "../../components/ui";
import { useOrganisationStore, useSpinnerStore } from "../../../services/store";
import { useFormik } from "formik";
import { Fragment } from "react";
import { SummaryBox } from "../../components/common";
import { useApiServices } from "../../../services/api/ApiServiceContext";
import { toastify } from "../../../utils/toasts";
import { useOrganisationUseCase } from "../../../services/api/usescases";
import { useNavigateById } from "../../../hooks";
import { pageIds } from "../../../utils/constantes";

interface Step2Props {
    handleSubmitNextStep?: () => void;
    handlePrevStep: () => void;
}

export const Step2 : React.FC<Step2Props> = (props: Step2Props) => {
    
    // props
    const { handleSubmitNextStep, handlePrevStep } = props;

    //hooks
    const {formatMessage} = useIntl();
    const {orgData, countryList, industryList, tailleEntrepriseList} = useOrganisationStore();
    const navigateById = useNavigateById()
    const {orgServices} = useApiServices();
    const {addOrganisation} = useOrganisationUseCase(orgServices);
    const {showSpinner, hideSpinner} = useSpinnerStore()

    const formik = useFormik({
        initialValues: orgData,
        onSubmit: async () => {
            showSpinner(formatMessage({id:"account_creating"}));
            try{
                await addOrganisation(orgData).then(response => {
                    hideSpinner()
                    toastify('success', response.message);
                    navigateById(pageIds.ChooseOrg)
                })
            }
            catch(error: any){
                hideSpinner()
                toastify('error', error.message);
            }
        }
    })
    const orgInfos = [
        {
            id: "socialReason",
            name: formatMessage({id:"social_reason"}),
            value: orgData.raisonSociale
        },
        {
            id: "siret",
            name: formatMessage({id:"siret"}),
            value: orgData.siret
        },
        {
            id: "trigram",
            name:"Trigram",
            value: orgData.trigram
        },
        {
            id: "taillEntreprise",
            name: formatMessage({id:"org_size"}),
            value: tailleEntrepriseList.find((taille) => taille.tailleEntrepriseId == orgData.tailleEntreprise)!.libelle
        },
        {
            id: "Email",
            name: "Email",
            value: orgData.organisationEmail
        },
        {
            id: "organisationPhone",
            name: formatMessage({id:"phone"}),
            value: orgData.organisationPhone
        },
        {
            id: "industry",
            name: formatMessage({id:"industry"}),
            value: industryList.find((industry) => industry.industrieId == orgData.industrie)!.libelle
        },
        {
            id: "orgCountry",
            name: formatMessage({id:"country"}),
            value: countryList.find((country) => country.countryId == orgData.organisationPays)!.libelle
        },
        {
            id: "orgCity",
            name: formatMessage({id:"city"}),
            value: orgData.organisationVille
        },
        {
            id: "orgPostCode",
            name: formatMessage({id:"post_code"}),
            value: orgData.organisationZipCode
        },
        {
            id: "orgAddress",
            name: formatMessage({id:"address"}),
            value: orgData.organisationRue
        },
        {
            id: "orgLogo",
            name: "Logo",
            value: orgData.orgLogo?.name
        }
    ]

    const { handleSubmit } = formik;
    
    return(
        <Fragment>
            <form 
            className="flex flex-col gap-7 items-center w-full"
            onSubmit={handleSubmit}
            >
                <div className="flex flex-col items-center gap-5">
                    {/* <h1 className="text-primary font-bold text-center">Step 4</h1> */}
                    <div className="flex flex-col md:flex-row gap-20">

                        {/* Résumé des informations de l'organisation */}
                        <SummaryBox 
                            title={formatMessage({id:"organization_title"})}
                            infos={orgInfos}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row md:gap-6">
                        <DefaultButton
                            type = "primary"
                            text = {formatMessage({id: "previous"})}
                            bgWhite = {true}
                            typeForm='button'
                            marginY={20}
                            width={335}
                            className="rounded-[4px] disabled:bg-primary/80"
                            onClick={handlePrevStep}
                        />
                        <DefaultButton
                            type = "primary"
                            text = {formatMessage({id: "Ajoutez une organisation"})}
                            bgWhite = {false}
                            typeForm='submit'
                            marginY={20}
                            width={335}
                            disabled={formik.isSubmitting}
                            className="rounded-[4px] disabled:bg-primary/70"
                        />
                    </div>
                </div>
            </form>
        </Fragment>
        
    )
}