import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

interface DefaultButtonProps {
    type: "primary" | "secondary"
    text: string;
    bgWhite : boolean;
    typeForm? : "button" | "submit" | "reset";
    icon?: IconDefinition;
    onClick?: () => void;
    textSize? : number;
    paddingX?: number;
    paddingY?: number;
    marginX?: number;
    marginY?: number;
    width?: number;
    widthFull?: boolean;
    height?: number;
    className?: string;
    disabled?: boolean;
    radius?: 'none' | 'sm' | 'md' | '2xl' | '3xl',
}

export const DefaultButton : React.FC<DefaultButtonProps> = (props: DefaultButtonProps) => {

    const { type, 
        text, 
        icon, 
        onClick, 
        bgWhite, 
        typeForm, 
        textSize, 
        paddingX, 
        paddingY, 
        marginX, 
        marginY, 
        width, 
        widthFull, 
        height, 
        className, 
        disabled,
        radius } = props;

    const bgType = {
        "primary" : "bg-primary",
        "secondary" : "bg-secondary"
    }

    const borderType = {
        "primary" : "border-primary",
        "secondary" : "border-secondary"
    }

    const textType = {
        "primary" : "text-primary",
        "secondary" : "text-secondary"
    }

    const backgroundColorClass :string = bgWhite ? " bg-[#FFFFFF]" : bgType[type];

    let fontSize = textSize ? `${textSize}px` : "16px";

    let borderRadius = radius ? `rounded-${radius}` : "rounded-xl";

    let padding : any = {
        paddingRight : "16px",
        paddingLeft : "16px",
    } ;

    let margin : any = {};

    let sizeWidth = width ? `${width}px` : "auto";
    let sizeHeight = height ? `${height}px` : "44px";

    if(widthFull){
        sizeWidth ="100%";
    }

    if (paddingX){
        padding.paddingLeft = `${paddingX}px`;
        padding.paddingRight = `${paddingX}px`;
    }

    if (paddingY){
        padding = {
            ...padding,
            paddingTop : `${paddingY}px`,
            paddingBottom : `${paddingY}px`,
        }
    }


    if(marginX){
        margin = {
            ...margin,
            marginRight : `${marginX}px`, 
            marginLeft: `${marginX}px`, 
        }
    }


    if(marginY){
        margin = {
            ...margin,
            marginTop : `${marginY}px`, 
            marginBottom : `${marginY}px`, 
        }
    }

    return (
        <Fragment>
            <button
                onClick={
                    ()=>{
                        if(onClick){
                            onClick()
                        }
                    }
                }
                className={` font-body flex flex-row justify-center items-center gap-3 ${borderRadius} ${backgroundColorClass} ${className ? className : ""} ${bgWhite ? `border ${borderType[type]} ${textType[type]}` : "text-white"}`}
                style={{
                    ...padding,
                    ...margin,
                    fontSize : fontSize,
                    width : sizeWidth,
                    height : sizeHeight
                }}
                type={typeForm ? typeForm : "button"}
                disabled={disabled}
            >
                {icon && <FontAwesomeIcon icon={icon} />}
                {text}
            </button>
        </Fragment>
    );
};
