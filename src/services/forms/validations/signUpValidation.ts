import * as yup from "yup";


export const userSignUpStepOneSchema = yup.object(
    {
        nom: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        prenom: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        lieuNais: yup.string().required("required_field"),
        dateNais: yup.date().required("required_field"),
        telephone: yup.string().required("required_field")
                            .matches(/^[0-9]+$/, 'invalid_phone_input_format'),
        pays: yup.string().required("required_field")
                            .matches(/^[a-zA-Z\s]+$/, 'invalid_country_city_input_format'),
        ville: yup.string().required("required_field")
                            .matches(/^[a-zA-Z\s]+$/, 'invalid_country_city_input_format'),
        userPostcode: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9\s]+$/, 'invalid_address_postcode_input_format'),
        rue: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9\s]+$/, 'invalid_address_postcode_input_format'),
        sexe: yup.string().required("required_field")
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
        raisonSociale: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        siret: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        industrie: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        organisationEmail: yup.string().email("incorrect_email_address_format").required("required_field"),
        organisationPhone: yup.string().required("required_field")
        .matches(/^[0-9]+$/, 'invalid_phone_input_format'),
        organisationRue: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        organisationPays: yup.string().required("required_field")
                            .matches(/^[a-zA-Z\s]+$/, 'invalid_country_city_input_format'),
        organisationVille: yup.string().required("required_field")
                            .matches(/^[a-zA-Z\s]+$/, 'invalid_country_city_input_format'),
        orgPostcode: yup.string().required("required_field")
        .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        // orgLogo: yup.mixed().required("required_field")
    }
)