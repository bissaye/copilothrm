import * as yup from "yup";

export const changePasswordSchema = yup.object(
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