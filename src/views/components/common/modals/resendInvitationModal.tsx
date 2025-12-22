import { DefaultButton } from "../../ui"
import { useIntl } from "react-intl"
import { BaseModalLayout } from "../../ui/modals"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSpinnerStore } from "../../../../services/store";
import { useApiServices } from "../../../../services/api/ApiServiceContext";
import { useInvitationUseCase } from "../../../../services/api/usescases";
import { toastify } from "../../../../utils/toasts";

interface ResendInvitationModalProps {
    invitationId: string
}

export const ResendInvitationModal: React.FC<ResendInvitationModalProps> = (props: ResendInvitationModalProps) => {

    const { invitationId } = props
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const {showSpinner, hideSpinner} = useSpinnerStore();
    const {invitationService} = useApiServices();
    const {resendInvitation} = useInvitationUseCase(invitationService)
    
    const showDropdown = () => {
        setDropdownVisible(prev => !prev)
    }

    const reSendInvitation = async () => {
        try{
            showSpinner()
            await resendInvitation(invitationId).then( response => {
                hideSpinner()
                toastify('success', response.message)
                setDropdownVisible(false)
            })
            .catch((error) => {
                hideSpinner()
                toastify('error', error.message)
            })
        }
        catch(error: any){
            hideSpinner()
            toastify('error', error.message)
        }
    }

    const { formatMessage } = useIntl();

    return (
        <>
        <button 
            className="bg-gray-100 hover:bg-gray-150 px-3 py-2 rounded-md w-fit" 
            onClick={showDropdown}>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </button>
        {dropdownVisible && <BaseModalLayout onClose={() => setDropdownVisible(false)} header={formatMessage({ id: "resend_invite_title" })}>
            {/* ModalBody */}
            <div className="flex flex-col justify-center items-center gap-3 h-28">
                {formatMessage({ id: "resend_invite" })}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-around gap-2 w-full px-5 py-3 border-t-2">
                <DefaultButton 
                    type={"primary"} 
                    text={formatMessage({ id: "yes" })}
                    bgWhite={false}
                    typeForm="button"
                    textSize={12}
                    height={42}
                    width={200}
                    onClick={reSendInvitation}
                    className="font-bold rounded-md hover:bg-primary-550"
                />

                <DefaultButton 
                    type={"secondary"} 
                    text={formatMessage({ id: "no" })}
                    bgWhite={false}
                    typeForm="button"
                    textSize={12}
                    height={42}
                    width={200}
                    onClick={() => setDropdownVisible(false)}
                    className="font-bold rounded-md hover:bg-secondary-550"
                />
            </div>
        </BaseModalLayout>}
        </>
    )
}