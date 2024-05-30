import { useIntl } from "react-intl";
import { FieldsInfo } from "../../../utils/interfaces/type";
import { DefaultButton, InputDate, InputSelect, InputText } from "../../components/ui";
import { useFormik } from "formik";
import { userSignUpStepOneSchema } from "../../../services/forms/validations";
import { InvitedUserSignupDatas } from "../../../utils/interfaces/DTO/request";
import { useInvitationSignupStore } from "../../../services/store";

interface Step1Props {
    handleSubmitNextStep: () => void;
}

export const Step1 : React.FC<Step1Props> = (props: Step1Props) => {

    const { handleSubmitNextStep } = props;
    const {formatMessage} = useIntl();
    const { invitedUserDatas, setInvitedUserDatas } = useInvitationSignupStore();
    const fields : Record<string, FieldsInfo> = {
        surname :{
            id : "surname",
            name : "surname",
        },
        firstname :{
            id : "firstname",
            name : "firstname",
        },
        birthplace :{
            id : "birthplace",
            name : "birthplace",
        },
        birthdate :{
            id : "birthdate",
            name : "birthdate",
        },
        userPhone :{
            id : "userPhone",
            name : "userPhone",
        },
        userCountry :{
            id : "userCountry",
            name : "userCountry",
        },
        userCity :{
            id : "userCity",
            name : "userCity",
        },
        userPostcode :{
            id : "userPostcode",
            name : "userPostcode",
        },
        userAddress :{
            id : "userAddress",
            name : "userAddress",
        },
        gender :{
            id : "gender",
            name : "gender",
        }
    }

    const genderOptions = [
        {
            value: "",
            text: formatMessage({id:"select"})
        },
        {
            value: "0",
            text: formatMessage({id:"man"})
        },
        {
            value: "1",
            text: formatMessage({id:"woman"})
        }
    ]

    const initialValues: any = {}
    Object.entries(fields).map(([_, field]) => {
        initialValues[field.name] = invitedUserDatas[field.name as keyof InvitedUserSignupDatas];
        return field
    })

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: userSignUpStepOneSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: async (values) => {
            const body: InvitedUserSignupDatas = {...values};
            setInvitedUserDatas(body);
            handleSubmitNextStep();
        }
    })
    const {values, errors, handleChange, handleSubmit} = formik

    return (
        <form 
            className="flex flex-col gap-7 items-center w-full"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-36 mb-8 w-full ">
                
                {/* colonne de gauche */}
                <div className="w-full md:w-[422px] flex flex-col gap-4 ">
                    {/* Nom de famille */}
                    <div>
                        <InputText
                            id = {fields.surname.id}    
                            name =  {fields.surname.name}  
                            label={formatMessage({id:"surname"})}
                            placeholder = {formatMessage({id: "enter_your_surname"})} 
                            value={values[fields.surname.name]}
                            onChange={handleChange}
                            errorMessage={ errors.surname ? errors.surname.toString() : undefined}
                        />
                    </div>
                    {/* Prénom */}
                    <div>
                        <InputText
                            id = {fields.firstname.id}    
                            name =  {fields.firstname.name}  
                            label={formatMessage({id:"firstname"})}
                            placeholder = {formatMessage({id: "enter_your_firstname"})} 
                            value={values[fields.firstname.name]} 
                            onChange={handleChange}
                            errorMessage={ errors.firstname ? errors.firstname.toString() : undefined}
                        />
                    </div>
                    {/* Lieu de naissance */}
                    <div>
                        <InputText
                            id = {fields.birthplace.id}    
                            name = {fields.birthplace.name}  
                            label={formatMessage({id:"birth_place"})}
                            placeholder = {formatMessage({id: "your_place_of_birth"})} 
                            value={values[fields.birthplace.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.birthplace ? errors.birthplace.toString() : undefined}
                        />
                    </div>
                    {/* Date de naissance */}
                    <div>
                        <InputDate
                            id = {fields.birthdate.id}    
                            name = {fields.birthdate.name}  
                            label={formatMessage({id:"birthdate"})}
                            value={values[fields.birthdate.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.birthdate ? errors.birthdate.toString() : undefined}
                        />
                    </div>
                    {/* Téléphone */}
                    <div>
                        <InputText
                            id = {fields.userPhone.id}    
                            name =  {fields.userPhone.name}  
                            label={formatMessage({id:"phone"})}
                            placeholder = {formatMessage({id: "enter_your_phone"})} 
                            value={values[fields.userPhone.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.userPhone ? errors.userPhone.toString() : undefined}
                        />
                    </div>
                </div>

                {/* colonne de droite */}
                <div className="w-full md:w-[422px] flex flex-col gap-4 ">
                    {/* Pays */}
                    <div>
                        <InputText
                            id = {fields.userCountry.id}    
                            name =  {fields.userCountry.name}  
                            label={formatMessage({id:"country"})}
                            placeholder = {formatMessage({id: "enter_your_country"})} 
                            value={values[fields.userCountry.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.userCountry ? errors.userCountry.toString() : undefined}
                        />
                    </div>
                    {/* Ville */}
                    <div>
                        <InputText
                            id = {fields.userCity.id}    
                            name =  {fields.userCity.name}  
                            label={formatMessage({id:"city"})}
                            placeholder = {formatMessage({id: "enter_your_city"})} 
                            value={values[fields.userCity.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.userCity ? errors.userCity.toString() : undefined}
                        />
                    </div>
                    {/* Code postal */}
                    <div>
                        <InputText
                            id = {fields.userPostcode.id}    
                            name =  {fields.userPostcode.name}  
                            label={formatMessage({id:"post_code"})}
                            placeholder = {formatMessage({id: "enter_your_post_code"})} 
                            value={values[fields.userPostcode.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.userPostcode ? errors.userPostcode.toString() : undefined}
                        />
                    </div>
                    {/* Adresse postale */}
                    <div>
                        <InputText
                            id = {fields.userAddress.id}    
                            name =  {fields.userAddress.name}  
                            label={formatMessage({id:"address"})}
                            placeholder = {formatMessage({id: "enter_your_address"})} 
                            value={values[fields.userAddress.name]} 
                            onChange={handleChange}
                            errorMessage={ errors.userAddress ? errors.userAddress.toString() : undefined}
                        />
                    </div>
                    {/* Sexe */}
                    <div>
                        <InputSelect
                            id = {fields.gender.id}    
                            name =  {fields.gender.name}  
                            label={formatMessage({id:"gender"})}
                            value={values[fields.gender.name]} 
                            onChange={handleChange}
                            options={genderOptions}      
                            errorMessage={ errors.gender ? errors.gender.toString() : undefined}
                        />
                    </div>
                </div>
                
            </div>
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
            
        </form>
    )
}

