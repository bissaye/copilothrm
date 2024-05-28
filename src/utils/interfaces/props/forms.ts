import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ReactNode, ChangeEvent } from "react";

export interface CustomInputProps {
    label? : string
    icon? : IconDefinition
    required? : boolean
    children?: ReactNode
    errorMessage? : string
}

export interface InputTextProps extends CustomInputProps {
    id: string,
    name: string,
    value? : string,
    placeholder? : string
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface InputSelectProps extends Omit<InputTextProps, 'onChange'> {
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    options : {
        value: string,
        text : string
    }[]
}
