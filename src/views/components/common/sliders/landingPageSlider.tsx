import React, { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { sliderImagesBackground } from "../../../../assets/images";
import "./style.css";

interface LandingPageSliderProps {

}

export const LandingPageSlider: React.FC<LandingPageSliderProps> = () => {

    const imagesList = Object.values(sliderImagesBackground);

    const [indexValue, setIndexValue] = useState<number>(0);
    const [slideValue, setSlideValue] = useState<number>(indexValue * (-100));

    const showImg = (e: number) => {
        if (e >= imagesList.length)
            setIndexValue(0);
        if (e < 0)
            setIndexValue(imagesList.length - 1);

        const img0 = document.getElementById("img0");
        const percentage = (indexValue) * (-100) + "%";
        if (img0 != null) {
            img0!.style.transition = `1s`;
            img0!.style.marginLeft = `${percentage}`;
        };

        var slideButtons = document.getElementsByClassName("slide-buttons");
        for (var i = 0; i < slideButtons.length; i++) {
            if (slideButtons[i].classList.contains("btn-active"))
                slideButtons[i].classList.remove("btn-active")
        }
        var buttonId = "button-" + indexValue;
        const btn = document.getElementById(buttonId);
        if (btn != null) {
            btn!.style.transition = '0.7s';
            btn!.classList.add("btn-active");
        };

    }


    const sideSlide = (direction: number) => {
        setIndexValue((prevIndex) => {
            let newIndex = prevIndex + direction;
            if (newIndex < 0) {
                return imagesList.length - 1;
            } else if (newIndex >= imagesList.length) {
                return 0;
            }
            return newIndex;
        });
    };

    const btnSlide = (index: number) => {
        setIndexValue(index);
    };

    useEffect(() => {
        var timer = setInterval( () => {
            setIndexValue((prevIndex) => {
                let newIndex = prevIndex + 1;
                if (newIndex < 0) {
                    return imagesList.length - 1;
                } else if (newIndex >= imagesList.length) {
                    return 0;
                }
                return newIndex;
            });
            }   
            , 3000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    useEffect(()=>{
        setSlideValue(-100 * indexValue);
    }, [indexValue])

    return (
        <Fragment>
            <div className=" h-full w-full bg-slate-200 flex flex-row justify-between items-center">
                <FontAwesomeIcon
                    icon={faCircleChevronLeft}
                    className=" ml-10 text-6xl text-white/60 cursor-pointer hover:text-white/90 transition ease-in-out duration-300 absolute z-10 left-[10px]"
                    onClick={() => sideSlide(-1)}
                />
                <div className="flex flex-col w-full h-full relative">
                    <div className="flex flex-row overflow-hidden w-full h-full">
                        {imagesList.map((img, index) => {
                            const id = "img" + index;
                            return <img 
                                        key={index} 
                                        src={img} 
                                        id={id} 
                                        className='sliderImage w-full h-full transition ease-in-out duration-300' 
                                        style={index == 0  ? {
                                            marginLeft: `${slideValue}%`,
                                            transition: '1s'
                                        }: {}}
                                    />
                        })}
                    </div>
                    <div className="mb-3 h-0 flex flex-row items-center justify-center gap-4 absolute bottom-[5px] left-[46%]">
                        {imagesList.map((_, index) => {
                            const id = "button-" + index;
                            return <button
                                key={index}
                                className={`slide-buttons cursor-pointer w-[15px] h-[15px] rounded-full border-2 border-white transition-all ${index === indexValue ? 'btn-active' : ''} `}
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