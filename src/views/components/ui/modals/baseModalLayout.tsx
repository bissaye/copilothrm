import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler, useRef } from "react";
import { createPortal } from "react-dom";
import { Fragment } from "react/jsx-runtime";
import "./style.css"

interface ModalProps {
    children: React.ReactNode
    onClose: () => void;
    header: string
}
export const BaseModalLayout: React.FC<ModalProps> = ({ children, onClose, header}) => {

    const modalRef = useRef<HTMLDivElement>(null)
    const handleClickOutside: MouseEventHandler = (event) => {
        if(modalRef.current && !modalRef.current.contains(event.target as Node)){
            onClose()
        }
    }
    return createPortal(<Fragment>
        <div 
            className="h-screen w-screen bg-black/40 absolute top-0 left-0 z-10"
            onClick={handleClickOutside}
        >
            <div className="w-full h-full flex justify-center items-center ">
                {/* modal */}
                <div 
                    className={`modal flex flex-col justify-between bg-white w-[450px] rounded-lg gap-4`}
                    ref={modalRef}
                >
                        {/* Modal Header */}
                    <div className="flex justify-between items-start w-full h-14 px-5 py-3 border-b-2">
                        <h1 className="font-heading font-bold text-t5">{header}</h1>
                        <button
                        onClick={onClose}
                        >
                            {<FontAwesomeIcon icon={faXmark} className="text-t7" />}
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    </Fragment>, document.body)
}
