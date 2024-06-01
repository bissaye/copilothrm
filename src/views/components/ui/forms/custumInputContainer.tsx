import React , {Fragment} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomInputProps } from "../../../../utils/interfaces/props";
import { useIntl } from "react-intl";


export const CustumInputContainer : React.FC<CustomInputProps> = (props : CustomInputProps) => {
    const {formatMessage} = useIntl();
    const { icon , label, required, children, errorMessage, bgNone} = props


    return <Fragment>
        <div className=' text-t4 font-body flex flex-col justify-start items-baseline'>
            {
                label &&
                <label className='text-gray-800 font-bold flex gap-1 w-full'>
                    {label} {required && <p className=" text-danger">*</p>}
                    {
                        errorMessage &&
                        <p className=" ml-1 text-danger text-[12px] leading-3 font-bold self-center max-w-72 mr-3">{formatMessage({id:errorMessage})}</p>
                    }
                </label>
            }
            <div className={`${bgNone ? "bg-transparent" : "bg-gray-200"} p-2 w-full  flex flex-row justify-start items-center gap-2 ${errorMessage && "border border-danger"}`}>
                {
                    icon &&
                    <FontAwesomeIcon icon={icon} className='text-black'/>
                }
                {
                    children ? children : ""
                }
            </div>
        </div>
    </Fragment>
}