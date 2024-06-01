import { Fragment, useImperativeHandle , forwardRef} from "react";
import { useIntl } from "react-intl";
import { InputText } from "../../components/ui";
import { useFormik } from "formik";
import { FieldsInfo } from '../../../utils/interfaces/type';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {resetPasswordSchemaEmail } from "../../../services/forms/validations";


interface ResetPassStep1Props {
    nextStep : () => void,
}

export const ResetPassStep1 =  forwardRef((props: ResetPassStep1Props, ref) => {
    const {formatMessage} = useIntl();
    const { nextStep} = props;

    const fields: Record<string, FieldsInfo> = {
        email: {
            id: "email",
            name: "email",
        },
    }
    const initialValuesStep1: any = {}
    Object.entries(fields).map(([_, field]) => {
        initialValuesStep1[field.name] = "";
        return field
    })

    const formik = useFormik({
        initialValues: initialValuesStep1,
        validationSchema: resetPasswordSchemaEmail,
        onSubmit: async (values) => {
            nextStep();
            console.log("mail: ", values.email)
        }
    })

    const {values, handleChange, errors, touched} = formik

    useImperativeHandle(ref, ()=>({
        submitForm: formik.submitForm
    }))

    return <Fragment>
        <form className="">
            <div className='mb-4'>
                <InputText
                    id={fields.email.id}
                    name={fields.email.name}
                    label='Email'
                    placeholder={formatMessage({ id: "enter_your_email_address" })}
                    icon={faEnvelope}
                    value={values[fields.email.name]}
                    onChange={handleChange}
                    errorMessage={errors.email && touched.email ? errors.email.toString() : undefined}
                />
            </div>
        </form>
    </Fragment>
})