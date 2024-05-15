import React, { Fragment, ReactNode, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { imagesLogo } from "../../../../assets/images";
import { sliderImagesBackground } from "../../../../assets/images";
import "./style.css";

interface LandingPageSliderProps {
    imagesList?: string;
}

export const LandingPageSlider: React.FC<LandingPageSliderProps> = () => {

    const images = Object.values(sliderImagesBackground);

    let indexValue = 0;

    const showImg = (e: number) => {
        if(e >= images.length) 
            indexValue = 0;
        if(e < 0) 
            indexValue = images.length - 1;
        
        const img0 = document.getElementById("img0");
        const percentage = (indexValue)*(-100) + "%";
        if(img0 != null ) {
            img0!.style.transition = `1s`;
            img0!.style.marginLeft = `${percentage}`;
        };

        var slideButtons = document.getElementsByClassName("slide-buttons");
        for(var i = 0; i < slideButtons.length; i++){
            if(slideButtons[i].classList.contains("btn-active"))
                slideButtons[i].classList.remove("btn-active")
        }
        var buttonId = "button-" + indexValue;
        const btn = document.getElementById(buttonId);
        if(btn != null ) {
            btn!.style.transition = '0.7s';
            btn!.classList.add("btn-active");
        };

    }
    
    showImg(indexValue);

    const sideSlide = (e: number) => {
        showImg(indexValue += e);
    }

    const btnSlide = (e: number) => {
        indexValue = e;
        showImg(indexValue)
    }

    const autoPlay = () => {
        showImg(indexValue += 1);
    }

    useEffect(() => {
        var timer = setInterval(autoPlay, 3000);

        return () => {
            clearInterval(timer);
        }
    });

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
                        <div className="mb-3 h-0 flex flex-row items-center justify-center gap-4 absolute bottom-[5px] left-[46%]">
                            {images.map((_, index) => {
                                let id = "button-" + index;
                                return <button
                                key={index}
                                className="slide-buttons cursor-pointer w-[15px] h-[15px] rounded-full border border-2 border-white"
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