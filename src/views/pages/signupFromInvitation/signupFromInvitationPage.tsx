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
import { toastify } from '../../../utils/toasts';
import { useLocation } from 'react-router-dom';
import { useStaffUseCase } from '../../../services/api/usescases';
import { log } from 'console';
import { InvitedUserSignupDatas } from '../../../services/api/DTO/request';

export const SignUpFromInvitationPage : React.FC = () => {
    
    const {formatMessage} = useIntl();
    const apiService = ApiRequestService.getInstance()
    const formService = new FormServices(apiService);
    const {staffService} = useApiServices();
    const {addStaffUser} = useStaffUseCase(staffService);
    const navigateById = useNavigateById();
    const { showSpinner, hideSpinner } = useSpinnerStore()
    const {initCountryList, invitedUserDatas, setInvitedUserDatas } = useInvitationSignupStore();
    const location = useLocation()
    const data = location.state;
    const [signupStep, setSignupStep] = useState< 1 | 2 >(1);

    const nextStep = () => {
        setSignupStep(signupStep + 1 as  1 | 2 );
    }

    const prevStep = () => {
        setSignupStep(signupStep - 1 as  1 | 2 )
    }

    const titles = [
        formatMessage({id:"info_perso"}),
        formatMessage({id:"info_compte"}),
        formatMessage({id:"confirm_info"})
    ]


    const submitForm = async () => {
        try{
            const body = invitedUserDatas;
            console.log(body)
            showSpinner()
            await addStaffUser(body).then(() => {
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
        if(data && "invitationData" in data){
            const idOrg = {
                idOrganisation: data.invitationData.idOrganisation
            }
            setInvitedUserDatas(idOrg as InvitedUserSignupDatas)
        }
        else{
            navigateById(pageIds.SignInPage)
        }
        getSignupDatas()
    }, [])

    return <Fragment>
        <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
            { data && "invitationToken" in data && "invitationData" in data &&
                
                <div className="w-full bg-red-300 px-10 py-5 text-red-800 text-center">
                    <span className="font-bold">{data.invitationData.nomComplet}</span>
                    {formatMessage({id:"you_have_invited_to_org_start"})} 
                    <span className="font-bold">{data.invitationData.nomOrganisation}</span>
                    {formatMessage({id:"you_have_invited_to_org_end_create_account"})}
                </div>
            }
            <div className='flex flex-col items-center w-4/5 lg:min-h-[536px] rounded-xl mb-16 border-gray-500 p-4'>
                <h1 className='font-bold font-heading text-t8 text-black my-4'>
                    {formatMessage({id:"create_your_collab_account"})}
                </h1>
                <Stepper currentStep={signupStep} steps={2} titles={titles} />
                
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