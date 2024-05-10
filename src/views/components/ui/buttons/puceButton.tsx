import React, { Fragment } from "react";

interface PuceButtonProps {
    text: string,
    onClick?: () => void,
    bgPrimary?: 50 | 100 | 200 | 300 ,
    width? : number,
}

export const PuceButton : React.FC<PuceButtonProps> = (props: PuceButtonProps) => {

    const {text , onClick, bgPrimary, width} = props;
    const backGround = {
        50 : "bg-primary-50",
        100 : "bg-primary-100",
        200 : "bg-primary-200",
        300 : "bg-primary-300",
    }

    let backgroundColorClass : string = "";
    if (bgPrimary) {
        backgroundColorClass = backGround[bgPrimary];
    }

    let size = "56px"; 
    let height = "56px"; 
    let textFontSize = "35px"; 

    if (width) {
        size = `${width}px`;
        height = `${width}px`;
        textFontSize = `${(width * 60) / 100}px`;
    }

    return <Fragment>
        <button
            onClick={() => {
                onClick && onClick()
            }}
            className={` w-14 text-white font-bold text-center flex flex-row justify-around items-center gap-3 rounded-full  ${backgroundColorClass}`}
            style={{
                width : size,
                height : height,
                fontSize : textFontSize
            }}
        >
            {text}
        </button>
    </Fragment>
}