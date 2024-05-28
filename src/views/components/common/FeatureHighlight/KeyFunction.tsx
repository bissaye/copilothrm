import React, {Fragment} from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface KeyFunctionProps {
    colorType : "primary" | "secondary" | "green"
    icon : IconDefinition,
    title : string,
    text : string,
}


export const KeyFunction : React.FC<KeyFunctionProps> = (props: KeyFunctionProps)=>{

    const {colorType, icon, title, text} = props;

    const textColors = {
        "primary" : "text-primary",
        "secondary" : "text-secondary",
        "green" : "text-greencustom",
    }

    return <Fragment>
        <div className="flex flex-col justify-between items-center w-s20 h-s19 gap-1 py-2">
            <FontAwesomeIcon icon={icon} className={`${textColors[colorType]} text-t10-2`} />
            <h1 className={`w-full text-t7 ${textColors[colorType]} text-center font-bold font-body`}>
                {title}
            </h1>
            <p className=" w-s18 px-1 text-t3 text-gray-800 text-center font-body">
                {text}
            </p>
        </div>  
    </Fragment>
}