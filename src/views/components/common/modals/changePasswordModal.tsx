import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DefaultButton, InputPassword } from "../../ui"
import { useIntl } from "react-intl"
import { useFormik } from "formik"
import * as yup from "yup";
import { useApiServices } from "../../../../services/api/ApiServiceContext"
import { useSpinnerStore } from "../../../../services/store"
import { toastify } from "../../../../utils/toasts"
import { ChangeUserPasswordData } from "../../../../services/api/DTO/request"
import { useUserUseCase } from "../../../../services/api/usescases"

interface ChangePasswordModalProps {
    onClose: () => void;
}

export const ChangePasswordModal : React.FC<ChangePasswordModalProps> = (props: ChangePasswordModalProps) => {

    const { onClose } = props;
    const {formatMessage} = useIntl();
    const { userServices } = useApiServices();
    const {changeUserPassword} = useUserUseCase( userServices );
    const { showSpinner, hideSpinner } = useSpinnerStore()

    const initialValues: ChangeUserPasswordData = {
        lastPassword: "",
        newPassword: ""
    }

    const validationSchema = yup.object(
        {
            lastPassword: yup.string().required("required_field"),
            newPassword: yup.string().required("required_field")
                .matches(/[A-Z]/,"incorrect_password_uppercase")
                .matches(/[a-z]/,"incorrect_password_lowercase")
                .matches(/[0-9]/,"incorrect_password_number")
                .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,"incorrect_password_special_char")
                .test('no(space', "incorrect_password_whitespace", (value) => !/\s/.test(value))
                .min(8, "incorrect_password_length")
        }
    )
    
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: async (values) => {
            try{
                const body: ChangeUserPasswordData = {...values};
                showSpinner()
                await changeUserPassword(body).then(response => {
                    hideSpinner()
                    toastify('success', response.message)
                })
            }
            catch(error: any){
                hideSpinner()
                toastify('error', error.message);
            }
        }
    })

    const {values, errors, handleChange, handleSubmit} = formik;
    
    return(
        <div 
            className="h-screen w-screen bg-black/40 absolute top-0 left-0 z-10"
        >
            <div className="w-full h-full flex justify-center items-center ">
                <div className="flex flex-col justify-between bg-white w-[450px] rounded-lg gap-4">
                    
                    {/* Modal Header */}
                    <div className="flex justify-between items-start w-full h-14 px-5 py-3">
                        <h1 className="font-heading font-bold text-t5">{formatMessage({id:"change_my_password"})}</h1>
                        <button
                        onClick={onClose}
                        >
                            {<FontAwesomeIcon icon={faXmark} className="text-t7" />}
                        </button>
                    </div>


                    {/* ModalBody */}
                    <div className="flex flex-col justify-start gap-3">
                        <form 
                            className="flex flex-col gap-3 mx-3 px-3"
                            onSubmit={handleSubmit}
                        >
                            <div className="">
                                <InputPassword 
                                    id={"lastPassword"}
                                    name={"lastPassword"}
                                    placeholder={formatMessage({id:"enter_current_password"})}
                                    value={values.lastPassword} 
                                    onChange={handleChange}
                                    label={formatMessage({id:"current_password"})}
                                    errorMessage={ errors.lastPassword ? errors.lastPassword.toString() : undefined}
                                />
                            </div>
                            <div className="mb-4">
                                <InputPassword
                                    id={"newPassword"} 
                                    name={"newPassword"}
                                    placeholder={formatMessage({id:"enter_new_password"})}
                                    value={values.newPassword} 
                                    onChange={handleChange}
                                    label={formatMessage({id:"new_password"})}
                                    errorMessage={ errors.newPassword ? errors.newPassword.toString() : undefined}
                                />
                            </div>

                            <DefaultButton 
                                    type={"primary"} 
                                    text={formatMessage({id:"change_my_password"})} 
                                    bgWhite={false}
                                    typeForm="submit"
                                    textSize={14}
                                    height={42}
                                    width={220}
                                    radius="md"
                                    className="self-center text-t7 font-bold rounded-md"
                                />
                        </form>
                        

                    </div>


                    {/* Modal Footer */}
                    <div className="flex items-center gap-2 w-full px-5 py-3">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}