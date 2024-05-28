import * as yup from "yup";


export const userSignInSchema = yup.object(
    {
        email: yup.string().email("incorrect_email_address_format").required("required_field"),
        password: yup.string().required("required_field"),
    }
)