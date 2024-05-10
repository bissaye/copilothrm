import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { imagesLogo } from "../../../../assets/images";

interface LandingPageSliderProps {
    imagesList?: string;
}

export const LandingPageSlider: React.FC<LandingPageSliderProps> = () => {
    
    const prevImage = () => {
        alert("previous image")
    }

    const nextImage = () => {
        alert("next image")
    }

    return(
        <Fragment>
            <div className=" h-full w-full bg-slate-200 flex flex-row justify-between items-center px-10">
                <FontAwesomeIcon icon={faCircleChevronLeft} className="text-6xl text-slate-500/80 cursor-pointer" onClick={prevImage} />
                <img src={imagesLogo.main} className='lg:w-[30vw] md:w-[20vw] sm:w-[20vw]'/>
                <FontAwesomeIcon icon={faCircleChevronRight} className="text-6xl text-slate-500/80 cursor-pointer" onClick={nextImage} />
            </div>
        </Fragment>
    );
}