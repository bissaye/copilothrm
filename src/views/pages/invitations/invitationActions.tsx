import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./style.css"
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { DropInvitationModal, InviteMemberModal, ResendInvitationModal } from "../../components/common";
import { useState } from "react";
import { Invitation } from "../../../services/api/DTO/response";

interface InvitationProperties {
    invitation: Invitation
}

export const InvitationActionDropdown: React.FC<InvitationProperties> = (props: InvitationProperties) => {
    const { invitation } = props
    const [inviteMemberVisible, setInviteMemberVisible] = useState(false)

    return <div className=" flex justify-center items-center gap-4 w-full">
        <ResendInvitationModal invitationId={invitation?.inviteId} />
        <button 
            className="bg-gray-100 hover:bg-gray-150 px-3 py-2 rounded-md w-fit"
            onClick={() => setInviteMemberVisible(prev => !prev)}>
            <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        { inviteMemberVisible && <InviteMemberModal onClose={() => setInviteMemberVisible(false)} invitation={invitation} />}
        <DropInvitationModal invitationId={invitation?.inviteId} />
    </div>
}