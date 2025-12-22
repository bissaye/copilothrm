import * as yup from "yup";

export const inviteMemberSchema = yup.object({
    emailDestinataire: yup.string().email("incorrect_email_address_format").required("required_field"),
    nomComplet: yup.string().required("required_field"),
    civilite: yup.string().required("required_field")
})