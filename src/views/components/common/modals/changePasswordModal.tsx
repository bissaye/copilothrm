import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DefaultButton, InputPassword, InputText } from "../../ui"
import { useIntl } from "react-intl"
import { faEye } from "@fortawesome/free-regular-svg-icons"

interface ChangePasswordModalProps {
    onClose: () => void;
}

export const ChangePasswordModal : React.FC<ChangePasswordModalProps> = (props: ChangePasswordModalProps) => {

    const { onClose } = props;
    const {formatMessage} = useIntl();

    
    return(
        <div 
            className="h-screen w-screen bg-black/40 absolute top-0 left-0 z-10"
            onClick={onClose}
        >
            Hey
            <div className="w-full h-full flex justify-center items-center ">
                <div className="flex flex-col justify-between bg-white w-[450px] rounded-lg gap-4">
                    
                    {/* Modal Header */}
                    <div className="flex justify-between items-start w-full h-14 px-5 py-3">
                        <h1 className="font-heading font-bold text-t5">{formatMessage({id:"change_my_password"})}</h1>
                        <button
                        onClick={onClose}
                        >
                            {<FontAwesomeIcon icon={faXmark} className="text-t7" />}
                        </button>
                    </div>


                    {/* ModalBody */}
                    <div className="flex flex-col justify-start gap-3">
                        <form 
                            className="flex flex-col gap-3 mx-3 px-3"
                        >
                            <div className="">
                                <InputText 
                                    id={"current_password"}
                                    name={"current_password"}
                                    icon={faEye}
                                    placeholder={formatMessage({id:"enter_current_password"})}
                                    label={formatMessage({id:"current_password"})}
                                />
                            </div>
                            <div className="mb-4">
                                <InputPassword
                                    id={"new_password"} 
                                    name={"new_password"}
                                    icon={faEye}
                                    placeholder={formatMessage({id:"enter_new_password"})}
                                    label={formatMessage({id:"new_password"})}
                                />
                            </div>
                            <div className="mb-4">
                                <InputPassword
                                    id={"confirm_new_password"} 
                                    name={"confirm_new_password"}
                                    icon={faEye}
                                    placeholder={formatMessage({id:"confirm_new_password"})}
                                    label={formatMessage({id:"confirm_new_password"})}
                                />
                            </div>

                            <DefaultButton 
                                    type={"primary"} 
                                    text={formatMessage({id:"change_my_password"})} 
                                    bgWhite={false}
                                    typeForm="submit"
                                    textSize={12}
                                    height={42}
                                    width={200}
                                    radius="md"
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