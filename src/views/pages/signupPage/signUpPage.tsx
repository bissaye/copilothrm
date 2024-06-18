import React, { Fragment, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Step1 } from './Step1';
import { LinkButton } from '../../components/ui';
import { pageIds } from '../../../utils/constantes';
import { useNavigateById } from '../../../hooks';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Stepper } from '../../components/common';
import { useSignupStore, useSpinnerStore } from '../../../services/store';
import { useFormUseCase } from '../../../services/api/usescases/FormUseCases';
import { useApiServices } from '../../../services/api/ApiServiceContext';
import { toastify } from '../../../utils/toasts';


export const SignUpPage : React.FC = () => {
    const {formatMessage} = useIntl();
    const navigateById = useNavigateById();
    const {formServices} = useApiServices()
    const {initSignupForm} = useFormUseCase(formServices);
    const {showSpinner, hideSpinner} = useSpinnerStore()

    const {initCountryList, initIndustryList, initTailleEntrepriseList} = useSignupStore();

    const [signupStep, setSignupStep] = useState< 1 | 2 | 3 | 4 >(1);

    const nextStep = () => {
        setSignupStep(signupStep + 1 as  1 | 2 | 3 | 4 );
    }

    const prevStep = () => {
        setSignupStep(signupStep - 1 as  1 | 2 | 3 | 4 )
    }

    const titles = [
        formatMessage({id:"info_perso"}),
        formatMessage({id:"info_compte"}),
        formatMessage({id:"info_org"}),
        formatMessage({id:"confirm_info"})
    ]

    useEffect(() => {
        async function getSignupDatas() {
            showSpinner(formatMessage({id:"init_form"}))
            try{
                await initSignupForm().then(response => {
                    initCountryList(response!.countryList)
                    initIndustryList(response!.industryLise)
                    initTailleEntrepriseList(response!.tailleEntrepriseLsit)
                    hideSpinner()
                })
            }
            catch(error: any){
                hideSpinner()
                toastify('error', error.message)
            }
        }
        getSignupDatas()
    }, [])

    return <Fragment>
        <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
            <div className='flex flex-col items-center w-4/5 lg:min-h-[536px] rounded-xl mb-16 border-gray-500 p-4'>
                <h1 className='font-bold font-heading text-t8 text-black my-4'>
                    {formatMessage({id:"sign_up_link"})}
                </h1>
                <Stepper currentStep={signupStep} steps={4} titles={titles} />
                { signupStep === 1 &&
                    <Step1 handleSubmitNextStep={nextStep} />
                }

                { signupStep === 2 &&
                    <Step2 handleSubmitNextStep={nextStep} handlePrevStep={prevStep}/>
                }

                { signupStep === 3 &&
                    <Step3 handleSubmitNextStep={nextStep} handlePrevStep={prevStep}/>
                }

                { signupStep === 4 &&
                    <Step4 handlePrevStep={prevStep}/>
                }
                
                <div className='flex flex-row gap-4 mt-3'>
                    <p className='font-bold font-body text-t2 text-gray-800'>{formatMessage({id:"already_an_account"})}</p>
                        
                    <LinkButton
                        text= {formatMessage({id:"sign_in_link"})}
                        type='primary'
                        className='font-bold'
                        textSize={12}
                        onClick={() => {navigateById(pageIds.SignInPage)}}
                    />
                </div>
            </div>
        </div>
        
    </Fragment>
}