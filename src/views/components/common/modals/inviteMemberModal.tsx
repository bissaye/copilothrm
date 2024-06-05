import { faLink, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DefaultButton, InputSelect, InputText, LinkButton } from "../../ui"
import { avatars } from "../../../../assets/images"
import { useIntl } from "react-intl"
import { faBuilding } from "@fortawesome/free-regular-svg-icons"
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear"

interface InviteMemberModalProps {
    onClose: () => void;
}

export const InviteMemberModal : React.FC<InviteMemberModalProps> = (props: InviteMemberModalProps) => {

    const { onClose } = props;
    const {formatMessage} = useIntl();

    const departmentsOptions = [
        {
            value: "",
            text: formatMessage({id:"select"})
        },
        {
            value: "0",
            text: formatMessage({id:"finances"})
        },
        {
            value: "1",
            text: formatMessage({id:"administrative"})
        },
        {
            value: "2",
            text: formatMessage({id:"human_resources"})
        }
    ]

    
    return(
        <div 
            className="h-screen w-screen bg-black/40 absolute top-0 left-0 z-10"
            onClick={onClose}
        >
            <div className="w-full h-full flex justify-center items-center ">
                <div className="flex flex-col justify-between bg-white w-[450px] rounded-lg gap-4">
                    
                    {/* Modal Header */}
                    <div className="flex justify-between items-start w-full h-14 px-5 py-3">
                        <h1 className="font-heading font-bold text-t5">{formatMessage({id:"add_member"})}</h1>
                        <button
                        onClick={onClose}
                        >
                            {<FontAwesomeIcon icon={faXmark} className="text-t7" />}
                        </button>
                    </div>


                    {/* ModalBody */}
                    <div className="flex flex-col justify-start gap-3">
                        <form 
                            className="flex flex-col gap-3 mx-3 "
                        >
                            <div className="">
                                <InputText 
                                    id={"new_member_email"} 
                                    name={"new_member_email"}
                                    placeholder={formatMessage({id:"enter_member_email"})}
                                    label="Email"
                                />
                            </div>
                            <div className="mb-4">
                                <InputText 
                                    id={"new_member_name"} 
                                    name={"new_member_name"}
                                    placeholder={formatMessage({id:"enter_collaborator_name"})}
                                    label={formatMessage({id:"name"})}
                                />
                            </div>

                            <div className="flex justify-between mb-4">
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
                            </div>

                            <DefaultButton 
                                    type={"primary"} 
                                    text={formatMessage({id:"invite"})} 
                                    bgWhite={false}
                                    typeForm="submit"
                                    textSize={12}
                                    height={42}
                                    width={150}
                                    className="self-center text-t7 font-bold rounded-md"
                                />
                        </form>
                        

                    </div>


                    {/* Modal Footer */}
                    <div className="flex items-center gap-2 w-full px-5 py-3">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}