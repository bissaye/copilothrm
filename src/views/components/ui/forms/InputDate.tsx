import React , {Fragment} from "react";
import { InputTextProps } from "../../../../utils/interfaces/props";
import { CustumInputContainer } from "./custumInputContainer";
import './style.css'

export const InputDate : React.FC<InputTextProps> = (props : InputTextProps) => {
    const {id, name, value, placeholder, disabled, onChange, className} = props
    return <Fragment>
        <CustumInputContainer
            {...props}
        >
            <input 
                id = {id}
                name = {name}
                type='date'
                className={`default-input ${className}`}
                value={value}
                placeholder= {placeholder}
                disabled={disabled}
                onChange={(e) => {
                    if(onChange){
                        onChange(e);
                    }
                }}
                autoComplete=""
            />
        </CustumInputContainer>
    </Fragment>
}