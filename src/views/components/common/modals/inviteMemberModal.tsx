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
            className="h-screen w-screen bg-black/40 absolute top-0 left-0"
        >
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex flex-col justify-between bg-white w-[400px] rounded-lg gap-4">
                    
                    
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
                            className="flex flex-col gap-4 mx-3 "
                        >
                            <div className="flex flex-row">
                                <div className="w-[80%]">
                                    <InputText 
                                        id={"new_member_email"} 
                                        name={"new_member_email"}
                                        placeholder={formatMessage({id:"enter_member_email"})}
                                    />
                                </div>
                                
                                <DefaultButton 
                                    type={"primary"} 
                                    text={formatMessage({id:"invite"})} 
                                    bgWhite={false}
                                    typeForm="submit"
                                    textSize={12}
                                    height={42}
                                    width={100}
                                    className="font-bold rounded-l-none rounded-r-md"
                                />
                            </div>
                            

                            <div className='flex flex-row justify-start gap-4 items-start h-[40px] mx-5'>
                                <div className="relative">
                                    <img src={avatars.avatarLandingPage} className='w-9 h-9 rounded-full'/>
                                </div>
                                <div className="flex flex-col justify-center items-start">
                                    <h1 className=' font-body font-bold text-black text-t3'>
                                        {formatMessage({id:"username"})}
                                    </h1>
                                    <p className='w-full text-black text-t1'>
                                        {formatMessage({id:"view_profile"})}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 w-full ">
                                <div className="flex justify-between">
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

                                <div className="flex justify-between">
                                    <span className="flex gap-3 items-center ml-2">
                                        {<FontAwesomeIcon icon={faGear} className="text-t7" />}
                                        <p>{formatMessage({id:"role"})}</p>
                                    </span>
                                    <div className="w-44">
                                        <InputSelect 
                                            id={"new_member_email"} 
                                            name={"new_member_email"}
                                            options={departmentsOptions}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                        

                    </div>


                    {/* Modal Footer */}
                    <div className="flex items-center gap-2 w-full h-16 border border-x-0 border-b-0 border-t-gray-500 px-5 py-3">
                        <FontAwesomeIcon icon={faLink} className="text-primary" />
                        <LinkButton 
                            text={formatMessage({id:"copy_link"})}
                            type={"primary"}
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}