import React , {Fragment, useEffect, useState} from "react";
import { InputTextProps } from "../../../../utils/interfaces/props";
import { CustumInputContainer } from "./custumInputContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";


export const InputPassword : React.FC<InputTextProps> = (props : InputTextProps) => {

    const [showPass, setShowPass] = useState<boolean>(false);
    const [type, setType] = useState<'password' | 'text'>('password');
    const {id, name, value, placeholder, disabled, blockCopy, blockPaste, onChange} = props;

    useEffect(()=>{
        if(showPass){
            setType("text")
        }else{
            setType("password")
        }
    }, [showPass])

    return <Fragment>
        <CustumInputContainer
            {...props}
        >
            <div className=" w-full flex flex-row items-center gap-2">
                <input 
                    id = {id}
                    name = {name}
                    type={type}
                    className='default-input w-[90%]'
                    value={value}
                    placeholder= {placeholder}
                    disabled={disabled}
                    onChange={(e) => {
                        if(onChange){
                            onChange(e);
                        }
                    }}
                    autoComplete=""
                    onPaste = {(e) => {
                        if(blockPaste){
                            e.preventDefault();
                        }
                    }}
                    onCopy={(e) => {
                        if(blockCopy){
                            e.preventDefault();
                        }
                    }}
                />
                {
                    
                    !showPass ?
                    <FontAwesomeIcon 
                        icon={faEye}
                        onClick={() => {
                            setShowPass(true)
                        }}
                        className=" cursor-pointer"
                    />
                    :
                    <FontAwesomeIcon 
                        icon={faEyeSlash}
                        onClick={() => {
                            setShowPass(false)
                        }}
                        className=" cursor-pointer"
                    />
                }
            </div>
        </CustumInputContainer>
    </Fragment>
}