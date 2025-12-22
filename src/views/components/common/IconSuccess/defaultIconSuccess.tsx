import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import './style.css'

export const DefaultIconSuccess :React.FC = () => {

    return <Fragment>
        <div className="flex flex-col justify-center h-full w-full">
            <FontAwesomeIcon icon={faCheckCircle} className="text-primary text-t12 animate-success" />
        </div>
    </Fragment>
}