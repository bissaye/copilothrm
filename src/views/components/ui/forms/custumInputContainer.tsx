import React , {Fragment} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomInputProps } from "../../../../utils/interfaces/props";
import { useIntl } from "react-intl";


export const CustumInputContainer : React.FC<CustomInputProps> = (props : CustomInputProps) => {
    const {formatMessage} = useIntl();
    const { icon , label, required, children, errorMessage} = props


    return <Fragment>
        <div className=' text-t4 font-body flex flex-col justify-start items-baseline'>
            {
                label &&
                <label className='text-black font-bold flex gap-1'>
                    {label} {required && <p className=" text-danger">*</p>} 
                    {
                        errorMessage &&
                        <p className=" ml-1 text-danger text-[12px]">{formatMessage({id:errorMessage})}</p>
                    }
                </label>
                
            }
            
            <div className={`bg-gray-200 p-2 w-full  flex flex-row justify-start items-center gap-2 ${errorMessage && "border border-danger"}`}>
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