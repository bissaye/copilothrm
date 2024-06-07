import { useIntl } from "react-intl";
import { DefaultButton } from "../../components/ui";
import { useSignupStore } from "../../../services/store";
import { useFormik } from "formik";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { SummaryBox } from "../../components/common";
import { useApiServices } from "../../../services/api/ApiServiceContext";
import { useAuthUseCase } from "../../../services/api/usescases/AuthUseCases";
import { toastify } from "../../../utils/toasts";

interface Step4Props {
    handleSubmitNextStep?: () => void;
    handlePrevStep: () => void;
}

export const Step4 : React.FC<Step4Props> = (props: Step4Props) => {
    
    // props
    const { handleSubmitNextStep, handlePrevStep } = props;

    //hooks
    const {formatMessage} = useIntl();
    const { userData, gender, countryList, industryList } = useSignupStore();
    const {authService} = useApiServices();
    const {register} =useAuthUseCase(authService);

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: userData,
        onSubmit: async () => {
            try{
                await register(userData).then(() => {
                    setIsSubmitted(true);
                })
            }
            catch(error: any){
                toastify('error', error.message);
            }
        }
    })

    const userInfos = [
        {
            id: "surname",
            name: formatMessage({id:"surname"}),
            value: userData.nom
        },
        {
            id: "firstname",
            name: formatMessage({id:"firstname"}),
            value: userData.prenom
        },
        {
            id: "birthdate",
            name: formatMessage({id:"birthdate"}),
            value: userData.dateNais
        },
        {
            id: "birthplace",
            name: formatMessage({id:"birth_place"}),
            value: userData.lieuNais
        },
        {
            id: "phone",
            name: formatMessage({id:"phone"}),
            value: userData.telephone
        },
        {
            id: "userCountry",
            name: formatMessage({id:"country"}),
            value: countryList.find((country) => country.countryId == userData.pays)!.libelle
        },
        {
            id: "userCity",
            name: formatMessage({id:"city"}),
            value: userData.ville
        },
        {
            id: "address",
            name: formatMessage({id:"address"}),
            value: userData.rue
        },
        {
            id: "postCode",
            name: formatMessage({id:"post_code"}),
            value: userData.userPostcode
        },
        {
            id: "gender",
            name: formatMessage({id:"gender"}),
            value: gender.find((gen) => gen.value == userData.sexe)!.text
        },
    ]
    const orgInfos = [
        {
            id: "socialReason",
            name: formatMessage({id:"social_reason"}),
            value: userData.raisonSociale
        },
        {
            id: "siret",
            name: formatMessage({id:"siret"}),
            value: userData.siret
        },
        {
            id: "email",
            name: "email",
            value: userData.organisationEmail
        },
        {
            id: "organisationPhone",
            name: formatMessage({id:"phone"}),
            value: userData.organisationPhone
        },
        {
            id: "orgCountry",
            name: formatMessage({id:"country"}),
            value: countryList.find((country) => country.countryId == userData.organisationPays)!.libelle
        },
        {
            id: "orgCity",
            name: formatMessage({id:"city"}),
            value: userData.organisationVille
        },
        {
            id: "orgPostCode",
            name: formatMessage({id:"post_code"}),
            value: userData.orgPostcode
        },
        {
            id: "orgAddress",
            name: formatMessage({id:"address"}),
            value: userData.organisationRue
        },
        {
            id: "industry",
            name: formatMessage({id:"industry"}),
            value: industryList.find((industry) => industry.industrieId == userData.industrie)!.libelle
        }
    ]

    const { handleSubmit } = formik;
    
    return(
        <Fragment>
            { !isSubmitted ?
                <form 
                className="flex flex-col gap-7 items-center w-full"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col items-center gap-5">
                    {/* <h1 className="text-primary font-bold text-center">Step 4</h1> */}
                    <div className="flex flex-col md:flex-row gap-20">

                        {/* Résumé des infos de l'utilisateur */}
                        <SummaryBox 
                            title={formatMessage({id:"user_title"})}
                            infos={userInfos}
                        />

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
                            text = {formatMessage({id: "sign_up_link"})}
                            bgWhite = {false}
                            typeForm='submit'
                            marginY={20}
                            width={335}
                            disabled={formik.isSubmitting}
                            className="rounded-[4px] disabled:bg-primary/70"
                            onClick={handleSubmitNextStep}
                        />
                    </div>
                </div>
            </form>
            :
            <div className="flex flex-col justify-center items-center gap-5 w-full">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary text-6xl" />
                <div className="w-full md:w-4/5 px-10 md:px-32 py-12 border border-grey-300 rounded rounded-6 shadow-md">
                    <p className="text-2xl font-medium text-center">{formatMessage({id:"user_account_created"})}</p>
                </div>
                <DefaultButton
                            type = "primary"
                            text = {formatMessage({id: "resend_mail"})}
                            bgWhite = {false}
                            typeForm='button'
                            marginY={20}
                            width={335}
                            className="rounded-[4px] disabled:bg-primary/80"
                        />
            </div>
            }
        </Fragment>
        
    )
}