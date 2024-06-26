import { useIntl } from "react-intl";
import { FieldsInfo } from "../../../utils/interfaces/type";
import { DefaultButton, InputPassword, InputText } from "../../components/ui";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { userSignUpStepTwoSchema } from "../../../services/forms/validations";
import { InvitedUserSignupDatas } from "../../../utils/interfaces/DTO/request";
import { useInvitationSignupStore } from "../../../services/store/signup/signupStore";

interface Step2Props {
    handleSubmitNextStep: () => void;
    handlePrevStep: () => void;
}

export const Step2 : React.FC<Step2Props> = (props: Step2Props) => {
    // props
    const { handleSubmitNextStep, handlePrevStep } = props;


    // hooks
    const {formatMessage} = useIntl();
    const { invitedUserDatas, setInvitedUserDatas } = useInvitationSignupStore();

    //constantes
    const fields : Record<string, FieldsInfo> = {
        email :{
            id : "email",
            name : "email",
        },
        password :{
            id : "password",
            name : "password",
        },
        confirmPassword :{
            id : "confirmPassword",
            name : "confirmPassword",
        }
    }
    const initialValues: any = {}
    Object.entries(fields).map(([_, field]) => {
        initialValues[field.name] = invitedUserDatas[field.name as keyof InvitedUserSignupDatas];
        return field
    })
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: userSignUpStepTwoSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: async (values) => {
            const body: InvitedUserSignupDatas = {...values};
            setInvitedUserDatas(body);
            handleSubmitNextStep();
        }
    })
    const {values, errors, handleChange, handleSubmit} = formik;

    // fonctions

    return(
        <form 
            className="flex flex-col gap-7 items-center w-full"
            onSubmit={handleSubmit}
        >
            <div className='w-full md:w-[89%]'>
                <InputText
                    id = {fields.email.id}    
                    name =  {fields.email.name}  
                    label='Email'
                    placeholder = {formatMessage({id: "enter_your_email_address"})}
                    value={values.email} 
                    onChange={handleChange}      
                    errorMessage={ errors.email ? errors.email.toString() : undefined}
                />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start gap-5 md:gap-36 md:mb-8 w-full h-80">
                
                {/* colonne de gauche */}
                <div className="w-full md:w-[422px]">
                    <InputPassword
                        id = {fields.password.id}    
                        name =  {fields.password.name}  
                        label={formatMessage({id:"password"})}
                        placeholder = {formatMessage({id: "enter_your_password"})}
                        icon = {faLock}  
                        value={values.password} 
                        onChange={handleChange}  
                        errorMessage={ errors.password ? errors.password.toString() : undefined}
                    />
                </div>

                {/* colonne de droite */}
                <div className="w-full md:w-[422px]">
                    <InputPassword
                        id = {fields.confirmPassword.id}    
                        name =  {fields.confirmPassword.name}  
                        label={formatMessage({id:"confirm_password"})}
                        placeholder = {formatMessage({id: "confirm_your_password"})}
                        icon = {faLock}  
                        value={values[fields.confirmPassword.name]} 
                        onChange={handleChange}  
                        errorMessage={ errors.confirmPassword ? errors.confirmPassword.toString() : undefined}
                    />
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
                    disabled={!formik.isValid || formik.isSubmitting}
                    className="rounded-[4px] disabled:bg-primary/70"
                />
            </div>
        </form>
    )
}