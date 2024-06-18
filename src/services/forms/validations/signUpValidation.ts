import * as yup from "yup";


export const userSignUpStepOneSchema = yup.object(
    {
        nom: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_éà\s]+$/, 'invalid_name_input_format'),
        dateNais: yup.date().required("required_field"),
        telephone: yup.string().required("required_field")
                            .matches(/^[0-9]+$/, 'invalid_phone_input_format'),
        pays: yup.string().required("required_field"),
        ville: yup.string().required("required_field"),
        sexe: yup.string().required("required_field")
    }
)

export const userSignUpStepTwoSchema = yup.object(
    {
        email: yup.string().email("incorrect_email_address_format").required("required_field"),
        password: yup.string().required("required_field")
        .matches(/[A-Z]/,"incorrect_password_uppercase")
        .matches(/[a-z]/,"incorrect_password_lowercase")
        .matches(/[0-9]/,"incorrect_password_number")
        .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,"incorrect_password_special_char")
        .test('no(space', "incorrect_password_whitespace", (value) => !/\s/.test(value))
        .min(8, "incorrect_password_length"),
        cpassword: yup.string().required("required_field")
                            .oneOf([yup.ref('password')], 'unmatching_password'),
    }
)

export const userSignUpStepThreeSchema = yup.object(
    {
        raisonSociale: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_\s]+$/, 'invalid_name_input_format'),
        industrie: yup.string().required("required_field"),
        organisationEmail: yup.string().email("incorrect_email_address_format").required("required_field"),
        organisationPhone: yup.string().required("required_field")
        .matches(/^[0-9]+$/, 'invalid_phone_input_format'),
        tailleEntreprise: yup.string().required('required_field'),
        organisationPays: yup.string().required("required_field"),
        organisationVille: yup.string().required("required_field"),
        organisationZipCode: yup.string().required("required_field"),
        trigram: yup.string().required("required_field"),
        siret: yup.string().required("required_field"),
    }
)

export const invitedUserSignupStepOneSchema = yup.object(
    {
        nom: yup.string().required("required_field")
                            .matches(/^[a-zA-Z0-9-_éà\s]+$/, 'invalid_name_input_format'),
        dateNaissance: yup.date().required("required_field"),
        mobilePhone: yup.string().required("required_field")
                            .matches(/^[0-9]+$/, 'invalid_phone_input_format'),
        country: yup.string().required("required_field"),
        adresseVille: yup.string().required("required_field"),
        sexe: yup.string().required("required_field")
    }
)