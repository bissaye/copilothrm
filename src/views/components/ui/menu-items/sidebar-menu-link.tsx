import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react/jsx-runtime";

interface SideBarMenuLinkProps {
    text: string;
    selected : boolean;
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
}

export const SideBarMenuLink : React.FC<SideBarMenuLinkProps> = (props: SideBarMenuLinkProps) => {

    const { 
        text,
        selected,
        icon, 
        onClick,
        textSize, 
        paddingX, 
        paddingY, 
        marginX, 
        marginY, 
        width, 
        widthFull, 
        height, 
        className, 
        disabled
    } = props;

    let fontSize = textSize ? `${textSize}px` : "16px";

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
    
    return(
        <Fragment>
            <button
                onClick={
                    ()=>{
                        if(onClick){
                            onClick()
                        }
                    }
                }
                className={`font-body flex flex-row justify-start items-center gap-3 bg-white ${className ? className : ""} ${selected ? `border-4 border-l-primary border-y-0 border-r-0 text-primary font-bold` : "text-gray-800"}`}
                style={{
                    ...padding,
                    ...margin,
                    fontSize : fontSize,
                    width : sizeWidth,
                    height : sizeHeight
                }}
                disabled={disabled}
            >
                {icon && <FontAwesomeIcon icon={icon} className={` text-[25px]`} />}
                {text}
            </button>
        </Fragment>
    )
}