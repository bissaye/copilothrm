import { Fragment } from "react/jsx-runtime";
import { InputPhoneProps } from "../../../../utils/interfaces/props";
import { CustumInputContainer } from "./custumInputContainer";

export const InputPhone : React.FC<InputPhoneProps> = (props : InputPhoneProps) => {
    const {id, name, value, placeholder, disabled, onChange, onBlur, className, countryCode} = props
    
    return <Fragment>
    <CustumInputContainer
        {...props}
    >
        <input
        type='text'
        disabled
        onChange={() => {}}
        value={`${countryCode ? `(${countryCode})` : ''}`}
        className="w-[13%] text-gray-600 text-center"
        />
        <input 
            id = {id}
            name = {name}
            type='text'
            className={`default-input ${className}`} 
            value={`${value}`}
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