import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

interface CustomDefaultButtonProps {
    text: string;
    icon?: IconDefinition;
    onClick?: () => void;
    bgPrimary?: 50 | 100 | 200 | 300;
    textSize? : number;
    paddingX?: number;
    paddingY?: number;
    marginX?: number;
    marginY?: number;
    width?: number;
    height?: number;
}

export const CustomDefaultButton: React.FC<CustomDefaultButtonProps> = (props: CustomDefaultButtonProps) => {
    const { text, icon, onClick, bgPrimary, textSize, paddingX, paddingY, marginX, marginY,  width, height } = props;
    const backGround = {
        50 : "bg-primary-50",
        100 : "bg-primary-100",
        200 : "bg-primary-200",
        300 : "bg-primary-300",
    }
    let backgroundColorClass : string = backGround[200];

    if (bgPrimary) {
        backgroundColorClass = backGround[bgPrimary];
    }

    let fontSize = textSize ? `${textSize}px` : "";

    let padding : any = {
        paddingRight : "12px",
        paddingLeft : "12px",
    } ;

    let margin : any = {};

    let sizeWidth = width ? `${width}px` : "auto";
    let sizeHeight = height ? `${height}px` : "auto";

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
                onClick={onClick}
                className={`text-white font-semibold flex flex-row justify-around items-center gap-3 rounded-lg ${backgroundColorClass}`}
                style={{
                    ...padding,
                    ...margin,
                    fontSize : fontSize,
                    width : sizeWidth,
                    height : sizeHeight
                }}
            >
                {icon && <FontAwesomeIcon icon={icon} />}
                {text}
            </button>
        </Fragment>
    );
};
