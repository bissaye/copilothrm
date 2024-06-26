import * as yup from "yup";


export const userSignUpStepOneSchema = yup.object(
    {
        surname: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        firstname: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        birthplace: yup.string().required("required_field"),
        birthdate: yup.date().required("required_field"),
        userPhone: yup.string().required("required_field")
                            .matches(/^[0-9]+$/, 'invalid_phone_input_format'),
        userCountry: yup.string().required("required_field")
                            .matches(/^[a-zA-Z\s]+$/, 'invalid_country_city_input_format'),
        userCity: yup.string().required("required_field")
                            .matches(/^[a-zA-Z\s]+$/, 'invalid_country_city_input_format'),
        userPostcode: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9\s]+$/, 'invalid_address_postcode_input_format'),
        userAddress: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9\s]+$/, 'invalid_address_postcode_input_format'),
        gender: yup.string().required("required_field")
    }
)

export const userSignUpStepTwoSchema = yup.object(
    {
        email: yup.string().email("incorrect_email_address_format").required("required_field"),
        password: yup.string().required("required_field")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
                "incorrect_password_format"),
        confirmPassword: yup.string().required("required_field")
                            .oneOf([yup.ref('password')], 'unmatching_password'),
    }
)

export const userSignUpStepThreeSchema = yup.object(
    {
        socialReason: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        siret: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        industry: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        orgAddress: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        orgCountry: yup.string().required("required_field")
                            .matches(/^[a-zA-Z\s]+$/, 'invalid_country_city_input_format'),
        orgCity: yup.string().required("required_field")
                            .matches(/^[a-zA-Z\s]+$/, 'invalid_country_city_input_format'),
        orgPostcode: yup.string().required("required_field")
        .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        // orgLogo: yup.mixed().required("required_field")
    }
)