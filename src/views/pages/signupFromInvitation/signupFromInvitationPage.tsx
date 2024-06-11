import React, { Fragment, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Step1 } from './Step1';
import { pageIds } from '../../../utils/constantes';
import { useNavigateById } from '../../../hooks';
import { Stepper } from '../../components/common';
import { Step2 } from './Step2';
import { ApiRequestService, FormServices } from '../../../services/api/services/implementations';
import { useInvitationSignupStore, useSpinnerStore } from '../../../services/store';
import { useApiServices } from '../../../services/api/ApiServiceContext';
import { useAuthUseCase } from '../../../services/api/usescases/AuthUseCases';
import { toastify } from '../../../utils/toasts';

export const SignUpFromInvitationPage : React.FC = () => {
    
    const {formatMessage} = useIntl();
    const apiService = ApiRequestService.getInstance()
    const formService = new FormServices(apiService);
    const {authService} = useApiServices();
    const {join} = useAuthUseCase(authService, apiService);
    const navigateById = useNavigateById();
    const { showSpinner, hideSpinner } = useSpinnerStore()
    const {initCountryList, invitedUserDatas } = useInvitationSignupStore();

    const [signupStep, setSignupStep] = useState< 1 | 2 >(1);

    const nextStep = () => {
        setSignupStep(signupStep + 1 as  1 | 2 );
    }

    const prevStep = () => {
        setSignupStep(signupStep - 1 as  1 | 2 )
    }

    const submitForm = async () => {
        try{
            const body = invitedUserDatas;
            showSpinner()
            await join(body).then(() => {
                navigateById(pageIds.SignInPage)
                hideSpinner();
            })
        }
        catch(error: any){
            hideSpinner();
            toastify('error', error.message);
        }
    }

    useEffect(() => {
        async function getSignupDatas() {
            try{
                const countryRes = await formService.getAllCountries();
                const countryList = countryRes.content
                initCountryList(countryList)
            }
            catch(error){
                console.log(error)
            }
        }
        getSignupDatas()
    }, [])

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