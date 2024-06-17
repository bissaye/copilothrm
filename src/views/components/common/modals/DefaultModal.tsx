import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactNode } from "react"


interface DefaultModalProps {
    onClose: () => void;
    title: string;
    body: ReactNode;
    footer?: ReactNode;
}

export const DefaultModal : React.FC<DefaultModalProps> = (props: DefaultModalProps) => {

    const { onClose , title, body, footer} = props;

    return(
        <div 
            className="h-screen w-screen bg-black/40 absolute top-0 left-0 z-10"
            onClick={onClose}
        >
            <div className="w-full h-full flex justify-center items-center ">
                <div className="flex flex-col justify-between bg-white w-[450px] rounded-lg gap-4">
                    
                    {/* Modal Header */}
                    <div className="flex justify-between items-start w-full h-14 px-5 py-3">
                        <h1 className="font-heading font-bold text-t5">{title}</h1>
                        <button
                        onClick={onClose}
                        >
                            {<FontAwesomeIcon icon={faXmark} className="text-t7" />}
                        </button>
                    </div>


                    {/* ModalBody */}
                    <div className="flex flex-col justify-start gap-3">
                        {body}
                    </div>


                    {/* Modal Footer */}
                    <div className="flex items-center gap-2 w-full px-5 py-3">
                        {footer ? footer : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}