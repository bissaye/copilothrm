import { useIntl } from "react-intl";
import { FieldsInfo } from "../../../utils/interfaces/type";
import { DefaultButton, InputText } from "../../components/ui";
import { useFormik } from "formik";
import { UserSignupData } from "../../../utils/interfaces/DTO/request";
import { useSignupStore } from "../../../services/store";
import { userSignUpStepThreeSchema } from "../../../services/forms/validations";

interface Step3Props {
    handleSubmitNextStep: () => void;
    handlePrevStep: () => void;
}

export const Step3 : React.FC<Step3Props> = (props: Step3Props) => {
    
    // props
    const { handleSubmitNextStep, handlePrevStep } = props;
    
    // hooks
    const {formatMessage} = useIntl();
    const { userData, setUserData } = useSignupStore();

    // constantes
    const fields : Record<string, FieldsInfo> = {
        socialReason :{
            id : "socialReason",
            name : "socialReason",
        },
        siret: {
            id: "siret",
            name: "siret"
        },
        industry: {
            id: "industry",
            name: "industry"
        },
        orgAddress: {
            id: "orgAddress",
            name: "orgAddress"
        },
        orgCountry :{
            id : "orgCountry",
            name : "orgCountry",
        },
        orgCity: {
            id: "orgCity",
            name: "orgCity"
        },
        orgPostcode: {
            id: "orgPostcode",
            name: "orgPostcode"
        },
        orgLogo: {
            id: "orgLogo",
            name: "orgLogo"
        }
    }

    const initialValues: any = {}
    Object.entries(fields).map(([_, field]) => {
        initialValues[field.name] = userData[field.name as keyof UserSignupData];
        return field
    })

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: userSignUpStepThreeSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: async (values) => {
            const body: UserSignupData = {...values};
            setUserData(body);
            handleSubmitNextStep();
        }
    })
    const {values, errors, handleChange, handleSubmit} = formik


    return(
        <form 
            className="flex flex-col gap-7 items-center w-full"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-36 mb-8 w-full">
                {/* colonne de gauche */}
                <div className="w-full md:w-[422px] flex flex-col gap-4 ">
                    {/* Raison sociale */}
                    <div>
                        <InputText
                            id = {fields.socialReason.id}    
                            name =  {fields.socialReason.name}  
                            label={formatMessage({id:"social_reason"})}
                            placeholder = {formatMessage({id: "enter_social_reason"})} 
                            value={values[fields.socialReason.name]}
                            onChange={handleChange}
                            // onBlur={handleBlur}
                            errorMessage={ errors.socialReason ? errors.socialReason.toString() : undefined}
                        />
                    </div>
                    {/* SIRET */}
                    <div>
                        <InputText
                            id = {fields.siret.id}    
                            name =  {fields.siret.name}  
                            label={formatMessage({id:"siret"})}
                            placeholder = {formatMessage({id: "enter_siret_number"})} 
                            value={values[fields.siret.name]} 
                            onChange={handleChange}
                            errorMessage={ errors.siret ? errors.siret.toString() : undefined}
                        />
                    </div>
                    {/* Industrie */}
                    <div>
                        <InputText
                            id = {fields.industry.id}    
                            name = {fields.industry.name}  
                            label={formatMessage({id:"industry"})}
                            placeholder = {formatMessage({id: "choose_industry"})} 
                            value={values[fields.industry.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.industry ? errors.industry.toString() : undefined}
                        />
                    </div>
                    {/* Adresse postale */}
                    <div>
                        <InputText
                            id = {fields.orgAddress.id}    
                            name = {fields.orgAddress.name}  
                            label={formatMessage({id:"enter_your_address"})}
                            placeholder={formatMessage({id:"address_of_organization"})}
                            value={values[fields.orgAddress.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.orgAddress ? errors.orgAddress.toString() : undefined}
                        />
                    </div>
                </div>

                {/* colonne de droite */}
                <div className="w-full md:w-[422px] flex flex-col gap-4 ">
                    {/* Pays de l'organisation */}
                    <div>
                        <InputText
                            id = {fields.orgCountry.id}    
                            name =  {fields.orgCountry.name}  
                            label={formatMessage({id:"country"})}
                            placeholder = {formatMessage({id: "country_of_organization"})} 
                            value={values[fields.orgCountry.name]}
                            onChange={handleChange}
                            errorMessage={ errors.orgCountry ? errors.orgCountry.toString() : undefined}
                        />
                    </div>
                    {/* Ville de l'organisation */}
                    <div>
                        <InputText
                            id = {fields.orgCity.id}    
                            name =  {fields.orgCity.name}  
                            label={formatMessage({id:"city"})}
                            placeholder = {formatMessage({id: "city_of_organization"})} 
                            value={values[fields.orgCity.name]} 
                            onChange={handleChange}
                            errorMessage={ errors.orgCity ? errors.orgCity.toString() : undefined}
                        />
                    </div>
                    {/* Code postal de l'organisation */}
                    <div>
                        <InputText
                            id = {fields.orgPostcode.id}    
                            name = {fields.orgPostcode.name}  
                            label={formatMessage({id:"post_code"})}
                            placeholder = {formatMessage({id: "post_code_of_organization"})} 
                            value={values[fields.orgPostcode.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.orgPostcode ? errors.orgPostcode.toString() : undefined}
                        />
                    </div>
                    {/* Logo de l'organisation */}
                    <div>
                        <InputText
                            id = {fields.orgLogo.id}    
                            name = {fields.orgLogo.name}  
                            label='Logo'
                            placeholder={formatMessage({id:"organization_logo"})}
                            value={values[fields.orgLogo.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.orgLogo ? errors.orgLogo.toString() : undefined}
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
                    text = {formatMessage({id: "next"})}
                    bgWhite = {false}
                    typeForm='submit'
                    marginY={20}
                    width={335}
                    disabled={!formik.isValid}
                    className="rounded-[4px] disabled:bg-primary/70"
                />
            </div>
        </form>
    )
}