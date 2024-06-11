import React , {Fragment} from "react";
import { InputSelectProps } from "../../../../utils/interfaces/props";
import { CustumInputContainer } from "./custumInputContainer";
import './style.css'
import { useIntl } from "react-intl";

export const InputSelect : React.FC<InputSelectProps> = (props : InputSelectProps) => {
    const {id, name, value, placeholder, disabled, onChange, options, className} = props
    const {formatMessage} = useIntl();
    return <Fragment>
        <CustumInputContainer
            {...props}
        >
            <select 
                id = {id}
                name = {name}
                className={`default-input ${className}`}
                value={value}
                disabled={disabled}
                onChange={(e) => {
                    if(onChange){
                        onChange(e);
                    }
                }}
                autoComplete=""
            >
                {
                    placeholder &&
                    <option value={""}>{placeholder}</option>
                }
                {
                    options.map((option, key) => (
                        <option value={option.value} key={`${name}-${key}`}>
                            {option.text}
                        </option>
                    ))
                }
            </select>
        </CustumInputContainer>
    </Fragment>
}