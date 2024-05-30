import React , {Fragment} from "react";
import { InputTextProps } from "../../../../utils/interfaces/props";
import { CustumInputContainer } from "./custumInputContainer";
import './style.css'

export const InputText : React.FC<InputTextProps> = (props : InputTextProps) => {
    const {id, name, value, placeholder, disabled, onChange, onBlur} = props
    return <Fragment>
        <CustumInputContainer
            {...props}
        >
            <input 
                id = {id}
                name = {name}
                type='text'
                className='default-input'
                value={value}
                placeholder= {placeholder}
                disabled={disabled}
                onChange={(e) => {
                    if(onChange){
                        onChange(e);
                    }
                }}
                onBlur={(e) => {
                    if(onBlur){
                        onBlur(e);
                    }
                }}
                autoComplete=""
            />
        </CustumInputContainer>
    </Fragment>
}