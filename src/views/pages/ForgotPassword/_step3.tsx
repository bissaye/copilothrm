import { Fragment, useImperativeHandle, forwardRef } from "react";
import { useIntl } from "react-intl";
import { InputPassword } from "../../components/ui";
import { useFormik } from "formik";
import { FieldsInfo } from '../../../utils/interfaces/type';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { resetPasswordSchemaPassword } from "../../../services/forms/validations";


interface ResetPassStep3Props {
    nextStep: () => void,
}

export const ResetPassStep3 = forwardRef((props: ResetPassStep3Props, ref) => {
    const { formatMessage } = useIntl();
    const { nextStep } = props;

    const fields: Record<string, FieldsInfo> = {
        password: {
            id: "password",
            name: "password",
        },
        confirmPassword: {
            id: "confirmPassword",
            name: "confirmPassword",
        }
    }

    const initialValuesStep3: any = {}
    Object.entries(fields).map(([_, field]) => {
        initialValuesStep3[field.name] = "";
        return field
    })

    const formik = useFormik({
        initialValues: initialValuesStep3,
        validationSchema: resetPasswordSchemaPassword,
        onSubmit: async () => {
            nextStep();
            console.log("reset password")
        }
    })

    const {values, handleChange, submitForm, errors} = formik

    useImperativeHandle(ref, () => ({
        submitForm: submitForm
    }))

    return <Fragment>
        <form className="w-full flex flex-col">
            <div className='mb-4'>
                <InputPassword
                    id={fields.password.id}
                    name={fields.password.name}
                    label={formatMessage({ id: "password" })}
                    placeholder={formatMessage({ id: "enter_your_password" })}
                    icon={faLock}
                    value={values.password}
                    onChange={handleChange}
                    errorMessage={errors.password ? errors.password.toString() : undefined}
                />
            </div>
            <div className="mb-4">
                <InputPassword
                    id = {fields.confirmPassword.id}    
                    name =  {fields.confirmPassword.name}  
                    label={formatMessage({id:"confirm_password"})}
                    placeholder = {formatMessage({id: "confirm_your_password"})}
                    icon = {faLock}  
                    value={values[fields.confirmPassword.name]} 
                    onChange={handleChange}  
                    errorMessage={ errors.confirmPassword ? errors.confirmPassword.toString() : undefined}
                    blockPaste ={true}
                />
            </div>
        </form>
    </Fragment>
})