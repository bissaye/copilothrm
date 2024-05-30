import { useIntl } from "react-intl";
import { DefaultButton, InputText } from "../../components/ui";
import { useSignupStore } from "../../../services/store";
import { useFormik } from "formik";
import { useNavigateById } from "../../../hooks";
import { pageIds } from "../../../utils/constantes";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { SummaryBox } from "../../components/common";

interface Step4Props {
    handleSubmitNextStep?: () => void;
    handlePrevStep: () => void;
}

export const Step4 : React.FC<Step4Props> = (props: Step4Props) => {
    
    // props
    const { handleSubmitNextStep, handlePrevStep } = props;

    //hooks
    const {formatMessage} = useIntl();
    const { userData } = useSignupStore();
    const navigateById = useNavigateById();

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: userData,
        onSubmit: async () => {
            return setTimeout(() => {
                    setIsSubmitted(true);
                }, 2000)
        }
    })

    const userInfos = [
        {
            id: "surname",
            name: formatMessage({id:"surname"}),
            value: userData.surname
        },
        {
            id: "firstname",
            name: formatMessage({id:"firstname"}),
            value: userData.firstname
        },
        {
            id: "birthdate",
            name: formatMessage({id:"birthdate"}),
            value: userData.birthdate
        },
        {
            id: "birthplace",
            name: formatMessage({id:"birth_place"}),
            value: userData.birthplace
        },
        {
            id: "phone",
            name: formatMessage({id:"phone"}),
            value: userData.userPhone
        },
        {
            id: "userCountry",
            name: formatMessage({id:"country"}),
            value: userData.userCountry
        },
        {
            id: "userCity",
            name: formatMessage({id:"city"}),
            value: userData.userCity
        },
        {
            id: "address",
            name: formatMessage({id:"address"}),
            value: userData.userAddress
        },
        {
            id: "postCode",
            name: formatMessage({id:"post_code"}),
            value: userData.userPostcode
        },
        {
            id: "gender",
            name: formatMessage({id:"gender"}),
            value: userData.gender
        },
    ]
    const orgInfos = [
        {
            id: "socialReason",
            name: formatMessage({id:"social_reason"}),
            value: userData.socialReason
        },
        {
            id: "siret",
            name: formatMessage({id:"siret"}),
            value: userData.siret
        },
        {
            id: "orgCountry",
            name: formatMessage({id:"country"}),
            value: userData.orgCountry
        },
        {
            id: "orgCity",
            name: formatMessage({id:"city"}),
            value: userData.orgCity
        },
        {
            id: "orgPostCode",
            name: formatMessage({id:"post_code"}),
            value: userData.orgPostcode
        },
        {
            id: "orgAddress",
            name: formatMessage({id:"address"}),
            value: userData.orgAddress
        },
        {
            id: "industry",
            name: formatMessage({id:"industry"}),
            value: userData.industry
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