import { useIntl } from "react-intl";
import { FieldsInfo } from "../../../utils/interfaces/type";
import { DefaultButton, InputPassword, InputText } from "../../components/ui";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import { userSignUpStepTwoSchema } from "../../../services/forms/validations";
import { UserSignupData } from "../../../services/api/DTO/request";
import { useSignupStore } from "../../../services/store";

interface Step2Props {
    handleSubmitNextStep: () => void;
    handlePrevStep: () => void;
}

export const Step2 : React.FC<Step2Props> = (props: Step2Props) => {
    // props
    const { handleSubmitNextStep, handlePrevStep } = props;


    // hooks
    const {formatMessage} = useIntl();
    const { userData, setUserData } = useSignupStore();

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
        cpassword :{
            id : "cpassword",
            name : "cpassword",
        }
    }

    const initialValues: any = {}
    Object.entries(fields).map(([_, field]) => {
        initialValues[field.name] = userData[field.name as keyof UserSignupData];
        return field
    })
    
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: userSignUpStepTwoSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: async (values) => {
            const body: UserSignupData = {...values};
            setUserData(body);
            handleSubmitNextStep();
        }
    })

    const {values, errors, handleChange, handleSubmit} = formik;

    // fonctions

    return(
        <form 
            className="flex flex-col gap-7 justify-center items-center w-full"
            onSubmit={handleSubmit}
        >
            <div className='w-full md:w-[89%]'>
                <InputText
                    id = {fields.email.id}    
                    name =  {fields.email.name}  
                    label='Email'
                    required
                    placeholder = {formatMessage({id: "enter_your_email_address"})}
                    value={values.email} 
                    onChange={handleChange}      
                    errorMessage={ errors.email ? errors.email.toString() : undefined}
                />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start gap-5 md:gap-36 md:mb-8 w-full md:w-[89%] h-80">
                
                {/* colonne de gauche */}
                <div className="w-full md:w-[422px]">
                    <InputPassword
                        id = {fields.password.id}    
                        name =  {fields.password.name}  
                        label={formatMessage({id:"password"})}
                        placeholder = {formatMessage({id: "enter_your_password"})}
                        required
                        icon = {faLock}  
                        value={values.password} 
                        onChange={handleChange}  
                        errorMessage={ errors.password ? errors.password.toString() : undefined}
                    />
                </div>

                {/* colonne de droite */}
                <div className="w-full md:w-[422px]">
                    <InputPassword
                        id = {fields.cpassword.id}    
                        name =  {fields.cpassword.name}  
                        label={formatMessage({id:"confirm_password"})}
                        placeholder = {formatMessage({id: "confirm_your_password"})}
                        required
                        icon = {faLock}  
                        value={values[fields.cpassword.name]} 
                        onChange={handleChange}  
                        errorMessage={ errors.cpassword ? errors.cpassword.toString() : undefined}
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