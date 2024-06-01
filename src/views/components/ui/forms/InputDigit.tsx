import React, { Fragment } from "react";

interface InputDigitProps {
    index? : string | number,
    value? : string | number,
    digitRef?: (el: HTMLInputElement | null) =>  HTMLInputElement | null,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
}

export const InputDigit: React.FC<InputDigitProps> = (props) => {
    const {index, value, digitRef, onChange, onKeyDown} = props;

    return <Fragment>
        <input
            key={index}
            type="text"
            maxLength={1}
            className=" w-s12 h-s12 outline-none rounded-l border border-primary text-center focus:shadow-[0px_0px_2px_2px_#fed0c5]"
            value={value}
            ref={digitRef}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    </Fragment>
}