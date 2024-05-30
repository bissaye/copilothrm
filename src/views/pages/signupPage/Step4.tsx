import { useIntl } from "react-intl";
import { DefaultButton, InputText } from "../../components/ui";
import { useSignupStore } from "../../../services/store";
import { useFormik } from "formik";

interface Step4Props {
    handleSubmitNextStep: () => void;
    handlePrevStep: () => void;
}

export const Step4 : React.FC<Step4Props> = (props: Step4Props) => {
    
    // props
    const { handleSubmitNextStep, handlePrevStep } = props;

    //hooks
    const {formatMessage} = useIntl();
    const { userData } = useSignupStore();

    const formik = useFormik({
        initialValues: userData,
        onSubmit: handleSubmitNextStep
    })

    const { values, handleSubmit } = formik;
    console.log(formik.isSubmitting)
    
    return(
        <form 
            className="flex flex-col gap-7 items-center w-full"
            onSubmit={handleSubmit}
        >
        <div className="flex flex-col items-center gap-5">
            {/* <h1 className="text-primary font-bold text-center">Step 4</h1> */}
            <div className="flex flex-col md:flex-row gap-20">
                {/* Résumé des infos de l'utilisateur */}
                <div className="h-[470px] w-[350px] md:w-[400px] pt-3 pb-7 border border-primary rounded rounded-[8px] flex flex-col items-center gap-3 overflow-scroll">
                    <h1 
                        className="text-primary font-heading font-extrabold mb-5"
                        >{formatMessage({id:"user_title"})}
                        </h1>
                    {/* Nom de famille */}
                    <div className="w-2/3">
                        <InputText
                            id = 'surname'    
                            name =  'surname' 
                            label={formatMessage({id:"surname"})}
                            value={values.surname}
                            disabled = {true}
                        />
                    </div>

                    {/* Prénom */}
                    <div className="w-2/3">
                        <InputText
                            id = 'firstname'    
                            name = 'firstname'  
                            label={formatMessage({id:"firstname"})}
                            value={userData.firstname}
                            disabled = {true}
                        />
                    </div>

                    {/* Lieu de naissance */}
                    <div className="w-2/3">
                        <InputText
                            id = 'birthplace'    
                            name = 'birthplace'  
                            label={formatMessage({id:"birth_place"})}
                            value={userData.birthplace}
                            disabled = {true}
                        />
                    </div>

                    {/* Date de naissance */}
                    <div className="w-2/3">
                        <InputText
                            id = 'birthdate'   
                            name = 'birthdate' 
                            label = {formatMessage({id:"birthdate"})}
                            value = {userData.birthdate.toString()}
                            disabled = {true}
                        />
                    </div>

                    {/* Téléphone */}
                    <div className="w-2/3">
                        <InputText
                            id = 'userPhone'   
                            name = 'userPhone'  
                            label={formatMessage({id:"phone"})}
                            value={userData.userPhone}
                            disabled = {true}
                        />
                    </div>

                    {/* Pays */}
                    <div className="w-2/3">
                        <InputText
                            id = 'userCountry'    
                            name = 'userCountry' 
                            label={formatMessage({id:"country"})}
                            value={userData.userCountry}
                            disabled = {true}
                        />
                    </div>

                    {/* Ville */}
                    <div className="w-2/3">
                        <InputText
                            id = 'userCity'    
                            name = 'userCity'  
                            label={formatMessage({id:"city"})}
                            value={userData.userCity}
                            disabled = {true}
                        />
                    </div>
                    {/* Code postal */}
                    <div className="w-2/3">
                        <InputText
                            id = 'userPostcode'    
                            name = 'userPostcode'  
                            label={formatMessage({id:"post_code"})}
                            value={userData.userPostcode}
                            disabled = {true}
                        />
                    </div>

                    {/* Adresse postale */}
                    <div className="w-2/3">
                        <InputText
                            id = 'userAddress'   
                            name = 'userAddress' 
                            label = {formatMessage({id:"address"})}
                            value = {userData.userAddress}
                            disabled = {true}
                        />
                    </div>

                    {/* Sexe */}
                    <div className="w-2/3">
                        <InputText
                            id = 'gender'   
                            name = 'gender'  
                            label={formatMessage({id:"gender"})}
                            value={userData.gender}
                            disabled = {true}
                        />
                    </div>
                </div>

                {/* Résumé des informations de l'organisation */}
                <div className="h-[470px] w-[350px] md:w-[400px] pt-3 pb-7 border border-primary rounded rounded-[8px] flex flex-col items-center gap-3 overflow-scroll">
                    <h1 className="text-primary font-extrabold mb-5">{formatMessage({id:"organization_title"})}</h1>
                    
                    {/* Raison sociale */}
                    <div className="w-2/3">
                        <InputText
                            id = 'socialReason'    
                            name = 'socialReason' 
                            label = {formatMessage({id:"social_reason"})}
                            value = {userData.socialReason}
                            disabled = {true}
                        />
                    </div>

                    {/* Siret */}
                    <div className="w-2/3">
                        <InputText
                            id = 'siret'    
                            name = 'siret'  
                            label={formatMessage({id:"siret"})}
                            value={userData.siret}
                            disabled = {true}
                        />
                    </div>

                    {/* Pays de l'organisation */}
                    <div className="w-2/3">
                        <InputText
                            id = 'orgCounrty'    
                            name = 'orgCounrty'  
                            label={formatMessage({id:"country"})}
                            value={userData.orgCountry}
                            disabled = {true}
                        />
                    </div>

                    {/* Ville de l'organisation */}
                    <div className="w-2/3">
                        <InputText
                            id = 'orgCity'   
                            name = 'orgCity' 
                            label = {formatMessage({id:"city"})}
                            value = {userData.orgCity}
                            disabled = {true}
                        />
                    </div>

                    {/* Code postal de l'organisation */}
                    <div className="w-2/3">
                        <InputText
                            id = 'orgPostcode'   
                            name = 'orgPostcode' 
                            label = {formatMessage({id:"post_code"})}
                            value = {userData.orgPostcode}
                            disabled = {true}
                        />
                    </div>

                    {/* Adresse postal de l'organisation */}
                    <div className="w-2/3">
                        <InputText
                            id = 'orgAddress'   
                            name = 'orgAddress' 
                            label = {formatMessage({id:"address"})}
                            value = {userData.orgAddress}
                            disabled = {true}
                        />
                    </div>

                    {/* Industrie */}
                    <div className="w-2/3">
                        <InputText
                            id = 'industry'   
                            name = 'industry' 
                            label = {formatMessage({id:"industry"})}
                            value = {userData.industry}
                            disabled = {true}
                        />
                    </div>

                    {/* Logo de l'organisation */}
                    <div className="w-2/3">
                        <InputText
                            id = 'orgLogo'   
                            name = 'orgLogo' 
                            label = 'Logo'
                            value = {userData.orgLogo?.name}
                            disabled = {true}
                        />
                    </div>

                </div>
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
    )
}