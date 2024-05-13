import React, { Fragment, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { imagesLogo } from "../../../../assets/images";
import { sliderImages } from "../../../../assets/images";
import "./style.css";

interface LandingPageSliderProps {
    imagesList?: string;
}

export const LandingPageSlider: React.FC<LandingPageSliderProps> = () => {
    
    const images = Object.values(sliderImages)

    let indexValue = 0;

    const showImg = (e: number) => {
        debugger
        if(e >= images.length) indexValue = 0;
        if(e < 0) indexValue = images.length - 1;
        
        const img = document.getElementById("img0");
        const percentage = (indexValue)*(-100) + "%";
        if(img != null ) {
            img!.style.transition = `0.7s`;
            img!.style.marginLeft = `${percentage}`;
        };

        var buttonId = "button-" + e;
        const btn = document.getElementById(buttonId);
        if(btn != null ) {
            btn!.style.transition = '0.7s';
            btn!.classList.add("btn-active");
        };
    }
    
    showImg(indexValue);

    const sideSlide = (e: number) => {
        showImg(indexValue += e)
    }

    const btnSlide = (e: number) => {
        debugger
        showImg(indexValue += e)
    }

    if(images.length > 0){

    }

    const swipeImage = (id: string) => {
        const image = document.getElementById("img0");
        const percentage = parseInt(id)*(-100) + "%";
        // debugger
        image!.style.transition = `0.7s`;
        image!.style.marginLeft = `${percentage}`;
    }

    return(
        <Fragment>
            <div className=" h-full w-full bg-slate-200 flex flex-row justify-between items-center">
                <FontAwesomeIcon 
                    icon={faCircleChevronLeft} 
                    className=" ml-10 text-6xl text-white/60 cursor-pointer hover:text-white/90 transition ease-in-out duration-300 absolute z-10 left-[10px]"
                    onClick={() => sideSlide(-1)} />
                    <div className="flex flex-col w-full h-full relative">
                        <div className="flex flex-row overflow-hidden w-full h-full">
                            {images.map((img, index) => {
                                let id = "img" + index;
                                return <img key={index} src={img} id={id} className='sliderImage w-full h-full transition ease-in-out duration-300'/>
                            })}
                        </div>  
                        <div className="slides-radios mb-3 h-0 flex flex-row items-center justify-center gap-4 absolute bottom-[5px] left-[46%]">
                            {images.map((_, index) => {
                                let id = "button-" + index;
                                return <button
                                key={index}
                                className="cursor-pointer w-[15px] h-[15px] rounded-full border border-2 border-white"
                                id={id}
                                onClick={() => btnSlide(index)}
                                ></button>
                            })}
                        </div>
                    </div>
                <FontAwesomeIcon 
                    icon={faCircleChevronRight} 
                    className=" mr-10 text-6xl text-white/60 cursor-pointer hover:text-white/90 transition ease-in-out duration-300 absolute z-10 right-[10px]" 
                    onClick={() => sideSlide(1)} />
            </div>
        </Fragment>
    );
}