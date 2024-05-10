import React, { Fragment } from "react";

interface LinkButtonProps {
    text: string,
    onClick?: () => void,
    textSize ? : number,
    underline ? : boolean
}

export const LinkButton : React.FC<LinkButtonProps> = (props: LinkButtonProps) => {

    const {text , onClick, textSize, underline} = props;

    let fontSize = textSize ? `${textSize}px` : "";

    return <Fragment>
        <button
            onClick={() => {
                onClick && onClick()
            }}
            className={` text-primary-50 font-light ${underline ? " border-b border-b-primary-50": ""}`}
            style={{
                fontSize: fontSize,
            }}
        >
            {text}
        </button>
    </Fragment>
}