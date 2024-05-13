import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../internationalisation';
import { publicRoutes } from '../../../../services/routes/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignIn, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useIntl } from 'react-intl';
import { CustomDefaultButton, DefaultButton, LinkButton, PuceButton } from '../../ui/buttons';
import { imagesLogo } from '../../../../assets/images';


export const PublicHeader : React.FC = () => {

    const {formatMessage} = useIntl();

    return <Fragment>
        <div className=' bg-white h-16 flex flex-row justify-between items-center px-4 md:px-8 lg:gap-14 xl:px-20'>
            
            <Link to={publicRoutes.LandingPage.path} type='link' className=' text-slate-600'>
                <img src={imagesLogo.main} className='lg:w-[15vw] md:w-[10vw] sm:w-[13vw]'/>
            </Link>
            
            <div className='flex flex-row justify-end items-center gap-4 md:gap-10'>
                <Link to={publicRoutes.LandingPage.path} type='link' className=' text-slate-600 font-semibold text-[16px] px-8'>
                    {formatMessage({id:"functionality_link"})}
                </Link>
                
                <Link to={publicRoutes.LandingPage.path} type='link' className=' text-slate-600 font-semibold text-[16px] px-8'>
                    {formatMessage({id:"about_link"})}
                </Link>
                
                <Link to={publicRoutes.LandingPage.path} type='link' className=' text-slate-600 font-semibold text-[16px] px-8'>
                    {formatMessage({id:"contact_link"})}
                </Link>
                
                <div className='flex flex-row justify-end items-center gap-4 md:gap-5'>
                    <Link to={publicRoutes.SignInPage.path} type='link' className=' text-slate-600'>
                        <CustomDefaultButton
                            text={formatMessage({id:"sign_in_link"})}
                            textSize={16}
                            icon={faSignIn}
                            paddingY={5}                    
                        />
                    </Link>
                    <Link to={publicRoutes.SignUpPage.path} type='link' className=' text-slate-600'>
                        <CustomDefaultButton
                            text={formatMessage({id:"sign_up_link"})}
                            textSize={16}
                            icon={faUserPlus}
                            paddingY={5}                    
                        />
                    </Link>
                </div>
                
                <LanguageSwitcher/>
            </div>
        </div>
    </Fragment>
}