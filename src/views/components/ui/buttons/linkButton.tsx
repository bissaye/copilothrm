import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

interface LinkButtonProps {
    text: string,
    type?: "primary" | "secondary",
    onClick?: () => void,
    icon?: IconDefinition;
    textSize ? : number,
    underline ? : boolean,
    width?: number,
    height?: number,
    className?: string
}

export const LinkButton : React.FC<LinkButtonProps> = (props: LinkButtonProps) => {

    const {type, text , onClick, textSize, underline, width, height, className, icon} = props;
    
    const textType = {
        "primary" : "text-primary",
        "secondary" : "text-secondary",
    }
    const borderType = {
        "primary" : "border-b-primary",
        "secondary" : "border-b-secondary",
    }

    const fontSize = textSize ? `${textSize}px` : "16px";

    const sizeWidth = width ? `${width}px` : "auto";
    const sizeHeight = height ? `${height}px` : "auto";

    return <Fragment>
        <button
            onClick={() => {
                onClick && onClick()
            }}
            className={`flex gap-3 items-center ${className} ${type ? textType[type] : "" } font-body ${type ? underline ? ` border-b ${borderType[type]}`: "" : ""}`}
            style={{
                fontSize: fontSize,
                width : sizeWidth,
                height : sizeHeight
            }}
        >
            {icon && <FontAwesomeIcon icon={icon} />}
            {text}
        </button>
    </Fragment>
}