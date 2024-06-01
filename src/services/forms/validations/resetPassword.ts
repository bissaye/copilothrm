import * as yup from "yup";


export const resetPasswordSchemaEmail = yup.object(
    {
        email: yup.string().email("incorrect_email_address_format").required("required_field"),
    }
)

export const resetPasswordSchemaOtp = yup.object(
    {
        otp: yup.string().required("required_field").matches(/^.{6}$/, "incomplet_otp"),
    }
)

export const resetPasswordSchemaPassword = yup.object(
    {
        password: yup.string().required("required_field")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
                "incorrect_password_format"),
        confirmPassword: yup.string().required("required_field")
                            .oneOf([yup.ref('password')], 'unmatching_password'),
    }
)