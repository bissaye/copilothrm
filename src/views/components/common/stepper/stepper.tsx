import React, { Fragment, useEffect } from 'react';
import { PuceButton } from '../../ui'


interface StepperProps {
    stepList : string [],
    currentStep : number,
    size? : number 
}


export const Stepper : React.FC<StepperProps> = (props : StepperProps) => {

    const { stepList, currentStep, size} = props;

    let width = 220;

    if(size){
        width = size;
    }

    useEffect( () => {
        console.log(`next step ${currentStep}`)
    }, [currentStep])

    return <Fragment>
        <div className='flex flex-row justify-between mb-4 ' style={{width: `${width}px`}}>
            {
                stepList.map((stepTitle, index ) => (
                    <div className='flex flex-row items-center' key={index}>
                        <div className='flex flex-col justify-start items-center relative'>
                            <PuceButton
                                text = {(index +1).toString()}
                                bgPrimary={currentStep > index ? 200 : 50}
                                className='stepper-puce-transition-colors'
                                width={width/4}
                            />
                            <p 
                                className={`absolute capitalize text-center ${currentStep > index ? "font-bold" : "font-semibold text-primary-50"} `}
                                style={{
                                    bottom: `-${stepTitle.length}%`,
                                    transform: 'translateY(100%)',
                                    width: '100%'
                                }}
                            >
                                {stepTitle}
                            </p>
                        </div>
                        {index !== stepList.length - 1 && <hr className={`w-12 border-t-2 ${currentStep > (index +1) ? "border-primary-200" : "border-primary-50"} my-1 stepper-bar-transition-colors`} />}
                    </div>
                ))
            }
        </div>
    </Fragment>
}
