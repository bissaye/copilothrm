import { DefaultButton, InputSelect, InputText } from "../../ui"
import { useIntl } from "react-intl"
import { useFormik } from "formik"
import { BaseModalLayout } from "./baseModalLayout"
import { useApiServices } from "../../../../services/api/ApiServiceContext"
import { useUserUseCase } from "../../../../services/api/usescases"
import { toastify } from "../../../../utils/toasts"
import { useSpinnerStore } from "../../../../services/store"
import { inviteMemberSchema } from "../../../../services/forms/validations";
import { StaffInvitation } from "../../../../services/api/DTO/request";
import { StaffOrganisation, UserData } from "../../../../services/api/DTO/response";


interface InviteMemberModalProps {
    onClose: () => void;
}

export const InviteMemberModal : React.FC<InviteMemberModalProps> = (props: InviteMemberModalProps) => {

    const { onClose } = props;
    const {formatMessage} = useIntl();
    const {userServices} = useApiServices();
    const {inviteUser} = useUserUseCase(userServices)
    const {showSpinner, hideSpinner} = useSpinnerStore()

    const organisation: StaffOrganisation = localStorage.getItem('currentOrg') ? JSON.parse(localStorage.getItem('currentOrg')!) : null;
    const user: UserData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
    const initialValues = {
        organisationId: organisation.organisationId,
        senderId: user.staff.staffId,
        objetInvite: `Invitation à rejoindre notre organisation ${organisation.raisonSociale}`,
        civilite: "",
        nomComplet: "",
        emailDestinataire: ""
    }

    const civiliteOptions = [
        {
            value: "Monsieur",
            text: "Monsieur"
        },
        {
            value: "Madame",
            text: "Madame"
        }
    ]

    const formik = useFormik({
        initialValues,
        validationSchema: inviteMemberSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: async (values) => {
            const body: StaffInvitation = {...values}
            try {
                showSpinner()
                debugger
                await inviteUser(body).then(response => {
                    hideSpinner()
                    toastify('success', response.message)
                    onClose()
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
                            id={"emailDestinataire"} 
                            name={"emailDestinataire"}
                            placeholder={formatMessage({id:"enter_member_email"})}
                            label="Email"
                            required
                            value={values.emailDestinataire}
                            onChange={handleChange}
                            errorMessage={ errors.emailDestinataire ? errors.emailDestinataire.toString() : undefined}
                        />
                    </div>
                    <div className="flex justify-between mb-4">
                        <div className="mb-4 w-[35%]">
                            <InputSelect 
                                id={"civilite"}
                                name={"civilite"}
                                value={values.civilite}
                                onChange={handleChange}
                                required
                                placeholder={formatMessage({id:"select"})}
                                label={formatMessage({id:"civilite"})}
                                errorMessage={ errors.civilite ? errors.civilite.toString() : undefined}
                                options={civiliteOptions}
                            />
                        </div>
                        <div className="mb-4 w-[60%]">
                            <InputText 
                                id={"nomComplet"} 
                                name={"nomComplet"}
                                placeholder={formatMessage({id:"enter_collaborator_name"})}
                                label={formatMessage({id:"name"})}
                                required
                                value={values.nomComplet}
                                onChange={handleChange}
                                errorMessage={ errors.nomComplet ? errors.nomComplet.toString() : undefined}
                            />
                        </div>
                    </div>

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