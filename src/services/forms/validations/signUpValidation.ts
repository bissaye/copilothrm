import * as yup from "yup";


export const userSignUpStepOneSchema = yup.object(
    {
        surname: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        firstname: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        birthplace: yup.string().required("required_field"),
        birthdate: yup.string().required("required_field"),
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