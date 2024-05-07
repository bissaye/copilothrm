import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../internationalisation';
import { publicRoutes } from '../../../../services/routes/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignIn, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useIntl } from 'react-intl';


export const AppHeader : React.FC = () => {

    const {formatMessage} = useIntl();

    return <Fragment>
        <div className=' bg-slate-50 h-16 flex flex-row justify-center items-center px-4 md:px-8 lg:gap-14 xl:px-20'>
            <h1 className='text-black font-extrabold uppercase text-lg md:text-xl'>
                CopilotHrm
            </h1>
            <div className='flex flex-row justify-end items-center gap-4 md:gap-8'>
                <Link to={publicRoutes.LandingPage.path} type='link' className=' text-slate-600'>
                    <FontAwesomeIcon icon={faHome} className='mx-1 md:mx-2'/>
                    {formatMessage({id:"home_link"})}
                </Link>
                <Link to={publicRoutes.SignInPage.path} type='link' className=' text-slate-600'>
                    <FontAwesomeIcon icon={faSignIn} className='mx-1 md:mx-2'/>
                    {formatMessage({id:"sign_in_link"})}
                </Link>
                <Link to={publicRoutes.SignUpPage.path} type='link' className=' text-slate-600'>
                    <FontAwesomeIcon icon={faUserPlus} className='mx-1 md:mx-2'/>
                    {formatMessage({id:"sign_up_link"})}
                </Link>
                <LanguageSwitcher/>
            </div>
        </div>
    </Fragment>
}