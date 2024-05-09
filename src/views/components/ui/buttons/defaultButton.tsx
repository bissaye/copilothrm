import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";

interface DefaultButtonProps {
    text: string,
    icon?: IconDefinition,
    onClick?: () => void;
}

export const DefaultButton : React.FC<DefaultButtonProps> = (props: DefaultButtonProps) => {

    const {text , icon, onClick} = props;

    return <Fragment>
        <div 
            onClick={() => {
                onClick && onClick()
            }}
            
            className={` bg-primary text-white flex flex-row justify-around items-center gap-3 rounded-lg px-3`}
        >
            {
                icon &&
                <FontAwesomeIcon icon={icon} />
            }
            {text}
        </div>
    </Fragment>
}