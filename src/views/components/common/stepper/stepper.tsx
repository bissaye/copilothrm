import React, { Fragment, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './style.css'
import { getWordsWithMinSize } from '../../../../utils/helpers';


interface StepperProps {
    steps: number,
    currentStep : number,
    titles? : string[]
}


export const Stepper : React.FC<StepperProps> = (props : StepperProps) => {

    const { steps, currentStep, titles} = props;
    const [upperStage, setUpperStage] = useState<boolean>(true);
    const prevStepRef = useRef<number>(currentStep);

    useEffect( () => {
        if (prevStepRef.current !== currentStep) {
            if (currentStep > prevStepRef.current) {
                setUpperStage(true);
            }
            else{
                setUpperStage(false);
            }
            prevStepRef.current = currentStep;
        }
    }, [currentStep])

    return <Fragment>
        <div className={`flex flex-row justify-between mb-4 ${titles ? " mb-20" : ""} `}>
            {
                Array.from( {length:steps}, (_, index ) => (
                    <div className='flex flex-row items-center' key={index}>
                        <div className='relative'>
                            <div className={` flex flex-col justify-center w-s5 h-s5 rounded-full  ${ currentStep === index+1 ? " transition ease-in duration-[1200ms] border-4 border-primary" : currentStep > index+1 ? "border-none bg-primary" : "border-2 border-gray-650"}`}>
                                {
                                    currentStep > index+1 &&
                                    <FontAwesomeIcon icon={faCheck} className=' text-t2 text-white text-center'/>
                                }
                            </div>
                            {
                                (titles && titles.length > index) &&
                                    <p className={`absolute -translate-x-1/2 left-1/2 text-center ${ currentStep === index+1 ? "text-primary font-bold": currentStep > index+1 ? "text-primary ": "text-gray-650"}`}>
                                        {getWordsWithMinSize(titles[index], 2, 14).map((title, _ ) => (
                                            <span>{title}<br/></span> 
                                        ))}
                                    </p>
                            }

                        </div>
                        {
                            index !== steps-1 && 
                            <div className={` relative w-[78px] h-s2 border-t-2 overflow-hidden ${ currentStep - (index+1) === 1 && upperStage ? "bg-gray-650" : currentStep > index+1 ? "bg-primary" : "bg-gray-650 my-1" } `}> 
                                <div className={` absolute w-full h-full bg-primary ${currentStep - (index+1) === 1 && upperStage ? "stepper-transition-bar-forward" : currentStep === (index+1) && !upperStage ? "stepper-transition-bar-back" : "hidden" }`}>
                                </div>
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    </Fragment>
}
