import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ReactNode, FocusEvent, ChangeEvent } from "react";

export interface CustomInputProps {
    label? : string
    icon? : IconDefinition
    required? : boolean
    children?: ReactNode
    errorMessage? : string
    bgNone?: boolean
}

export interface InputTextProps extends CustomInputProps {
    id: string,
    name: string,
    value? : string,
    placeholder? : string,
    className?: string,
    disabled?: boolean;
    blockCopy?: boolean;
    blockPaste?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

export interface InputSelectProps extends Omit<InputTextProps, 'onChange'> {
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    className?: string,
    options : InputSelectOptions[]
}

export interface InputSelectOptions {
    value: string,
    text : string
}
