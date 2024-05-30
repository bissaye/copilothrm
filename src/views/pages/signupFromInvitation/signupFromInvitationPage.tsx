import React, { Fragment, useState } from 'react';
import { useIntl } from 'react-intl';
import { Step1 } from './Step1';
import { pageIds } from '../../../utils/constantes';
import { useNavigateById } from '../../../hooks';
import { Stepper } from '../../components/common';
import { Step2 } from './Step2';

export const SignUpFromInvitationPage : React.FC = () => {
    const {formatMessage} = useIntl();
    const navigateById = useNavigateById();


    const [signupStep, setSignupStep] = useState< 1 | 2 >(1);

    const nextStep = () => {
        setSignupStep(signupStep + 1 as  1 | 2 );
    }

    const prevStep = () => {
        setSignupStep(signupStep - 1 as  1 | 2 )
    }

    const submitForm = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(navigateById(pageIds.ChooseOrg))
            }, 2000)
        })
    }

    return <Fragment>
        <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
            <div className='flex flex-col items-center w-4/5 lg:min-h-[536px] rounded-xl mb-16 border-gray-500 p-4'>
                <h1 className='font-bold font-heading text-t8 text-black capitalize my-4'>
                    {formatMessage({id:"sign_up_link"})}
                </h1>
                <Stepper currentStep={signupStep} steps={2} />
                
                { signupStep === 1 &&
                    <Step1 handleSubmitNextStep={nextStep} />
                }

                { signupStep === 2 &&
                    <Step2 handleSubmitNextStep={submitForm} handlePrevStep={prevStep}/>
                }

                
            </div>
        </div>
        
    </Fragment>
}