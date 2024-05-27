import React, { Fragment} from 'react';
import { useIntl } from 'react-intl';
import { landingPageImage, avatars } from '../../../assets/images';
import { DefaultButton } from '../../components/ui';
import { KeyFunction } from '../../components/common';
import { faBuilding, faHandHoldingDollar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { UserNotice } from '../../components/common';
import { FooterLandingPage } from '../../components/common';


export const LandingPage : React.FC = () => {

    const {formatMessage} = useIntl();

    return <Fragment>
        <div className=' w-full h-full flex flex-col justify-start items-start p-0 bg-white lg:overflow-x-hidden'>

            <div className='w-full flex flex-col justify-center font-body text-black text-center h-20 bg-primary-150'>
                {formatMessage({id:"landing_page_header_text"})}
            </div>

            <div className='w-full h-auto flex flex-row justify-around items-center mt-20'>
                <div className='flex flex-col'>
                    <h1 className=' font-heading font-bold text-secondary-800  text-t10-2'>Copilot HRM</h1>
                    <p className='font-heading font-bold text-secondary-800 text-t10 text-left max-w-[400px] h-auto'>
                        {formatMessage({id: "your_solution"})}
                    </p>
                    <p className='font-heading text-gray-800 text-t5 text-justify max-w-[500px] h-auto mt-5'>
                        {formatMessage({id: "capital_gain"})}
                    </p>
                    <div className='w-full flex flex-row justify-between items-center mt-5'>
                        <DefaultButton
                            type='primary'
                            text={formatMessage({id:"begin_now"})}
                            bgWhite={false}
                            width={235}
                            height={52}
                            paddingX={20}
                            className='capitalize'
                        />
                        <button className=' bg-primary-150 rounded-xl text-primary w-52 h-14 text-t5 capitalize'>
                            {formatMessage({id:"request_demo"})}
                        </button>
                    </div>
                </div>
                <img src={landingPageImage.img1} className=''/>
            </div>

            <h1 className='font-body font-bold text-secondary-800 text-t8 text-center w-full capitalize my-10'>
                {formatMessage({id: "key_functions"})}
            </h1>

            <div className='w-full h-auto flex flex-row justify-around items-center'>
                <KeyFunction
                    icon={faBuilding}
                    colorType='primary'
                    title={formatMessage({id:"org_management"})}
                    text={formatMessage({id:"org_management_text"})}
                />

                <KeyFunction
                    icon={faHandHoldingDollar}
                    colorType='secondary'
                    title={formatMessage({id:"payroll_management"})}
                    text={formatMessage({id:"payroll_management_text"})}
                />

                <KeyFunction
                    icon={faUsers}
                    colorType='green'
                    title={formatMessage({id:"human_ressources_management"})}
                    text={formatMessage({id:"human_ressources_management_ext"})}
                />
            </div>

            <h1 className='font-body font-bold text-secondary-800 text-t8 text-center w-full capitalize my-10'>
                {formatMessage({id: "notice"})}
            </h1>

            <div className='w-full flex gap-3 mx-8 pb-2 overflow-x-scroll mb-14'>
                <UserNotice
                    avatar= {avatars.avatarLandingPage}
                    name='Jennifer king'
                    date={ new Date('1/1/2024')}
                    rate={3}
                    comment='Nulla laboris fugiat fugiat minim minim excepteur eiusmod quis. Laborum est minim id cillum nostrud cillum consectetur 😍😍😍'
                />
                <UserNotice
                    avatar= {avatars.avatarLandingPage}
                    name='Jennifer king'
                    date={ new Date('1/1/2024')}
                    rate={3}
                    comment='Nulla laboris fugiat fugiat minim minim excepteur eiusmod quis. Laborum est minim id cillum nostrud cillum consectetur 😍😍😍'
                />
                             <UserNotice
                    avatar= {avatars.avatarLandingPage}
                    name='Jennifer king'
                    date={ new Date('1/1/2024')}
                    rate={3}
                    comment='Nulla laboris fugiat fugiat minim minim excepteur eiusmod quis. Laborum est minim id cillum nostrud cillum consectetur 😍😍😍'
                />
                                <UserNotice
                    avatar= {avatars.avatarLandingPage}
                    name='Jennifer king'
                    date={ new Date('1/1/2024')}
                    rate={3}
                    comment='Nulla laboris fugiat fugiat minim minim excepteur eiusmod quis. Laborum est minim id cillum nostrud cillum consectetur 😍😍😍'
                />
            </div>
            <FooterLandingPage/>
        </div>
    </Fragment>
}