import { DefaultButton, InputText } from "../../ui"
import { useIntl } from "react-intl"
import { useFormik } from "formik"
import * as yup from "yup";
import { BaseModalLayout } from "./baseModalLayout"
import { useApiServices } from "../../../../services/api/ApiServiceContext"
import { useUserUseCase } from "../../../../services/api/usescases"
import { toastify } from "../../../../utils/toasts"
import { useSpinnerStore } from "../../../../services/store"

interface InviteMemberModalProps {
    onClose: () => void;
}

export const InviteMemberModal : React.FC<InviteMemberModalProps> = (props: InviteMemberModalProps) => {

    const { onClose } = props;
    const {formatMessage} = useIntl();
    const {userServices} = useApiServices();
    const {inviteUser} = useUserUseCase(userServices)
    const {showSpinner, hideSpinner} = useSpinnerStore()

    // const departmentsOptions = [
    //     {
    //         value: "",
    //         text: formatMessage({id:"select"})
    //     },
    //     {
    //         value: "0",
    //         text: formatMessage({id:"finances"})
    //     },
    //     {
    //         value: "1",
    //         text: formatMessage({id:"administrative"})
    //     },
    //     {
    //         value: "2",
    //         text: formatMessage({id:"human_resources"})
    //     }
    // ]

    const validationSchema = yup.object({
        email: yup.string().email("incorrect_email_address_format").required("required_field"),
        nom: yup.string().required("required_field")
    })

    const initialValues = {
        email: "",
        nom: ""
    }

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: async (values) => {
            const body = {...values};
            try {
                showSpinner()
                await inviteUser(body).then(response => {
                    hideSpinner()
                    toastify('success', response.message)
                })
            }
            catch(error: any){
                hideSpinner()
                toastify('error', error.message)
            }
        }
    })
    const {values, errors, handleChange, handleSubmit} = formik
    
    return(
        <BaseModalLayout onClose={onClose} header={formatMessage({id:"add_member"})}>
            {/* ModalBody */}
            <div className="flex flex-col justify-start gap-3">
                <form 
                    className="flex flex-col gap-3 mx-3 "
                    onSubmit={handleSubmit}
                >
                    <div className="">
                        <InputText 
                            id={"email"} 
                            name={"email"}
                            placeholder={formatMessage({id:"enter_member_email"})}
                            label="Email"
                            value={values.email}
                            onChange={handleChange}
                            errorMessage={ errors.email ? errors.email.toString() : undefined}
                        />
                    </div>
                    <div className="mb-4">
                        <InputText 
                            id={"name"} 
                            name={"name"}
                            placeholder={formatMessage({id:"enter_collaborator_name"})}
                            label={formatMessage({id:"name"})}
                            value={values.nom}
                            onChange={handleChange}
                            errorMessage={ errors.nom ? errors.nom.toString() : undefined}
                        />
                    </div>

                    {/* <div className="flex justify-between mb-4">
                        <span className="flex gap-3 items-center ml-2">
                            {<FontAwesomeIcon icon={faBuilding} className="text-t7" />}
                            <p>{formatMessage({id:"department"})}</p>
                        </span>
                        <div className="w-44">
                            <InputSelect 
                                id={"new_member_email"} 
                                name={"new_member_email"}
                                options={departmentsOptions}
                            />
                        </div>
                    </div> */}

                    <DefaultButton 
                            type={"primary"} 
                            text={formatMessage({id:"invite"})} 
                            bgWhite={false}
                            typeForm="submit"
                            textSize={12}
                            height={42}
                            width={150}
                            disabled={formik.isSubmitting || !formik.isValid}
                            className="self-center text-t7 font-bold rounded-md disabled:bg-primary-350"
                        />
                </form>
                

            </div>


            {/* Modal Footer */}
            <div className="flex items-center gap-2 w-full px-5 py-3">
                
            </div>
        </BaseModalLayout>
    )
}