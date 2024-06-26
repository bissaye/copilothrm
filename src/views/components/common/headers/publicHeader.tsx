import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../internationalisation';
import { pageIds } from '../../../../utils/constantes';
import { publicRoutes } from '../../../../services/routes/routes';
import { useIntl } from 'react-intl';
import { DefaultButton, LinkButton } from '../../ui';
import { imagesLogo } from '../../../../assets/images';
import { usePageStore } from '../../../../services/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./style.css"

export const PublicHeader : React.FC = () => {

    const {page} = usePageStore();

    const {formatMessage} = useIntl();

    const [isFixed, setIsFixed] = useState(false);
    const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const topOffset = window.scrollY;
            const shouldFix = topOffset > 100; 

            setIsFixed(shouldFix);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showMenu = () => {
        setIsSubmenuVisible(prev => !prev)
    }


    return <Fragment>
        <div className={`bg-white shadow-m h-24 flex flex-row justify-between items-center p-4 md:px-8 lg:gap-14 xl:px-20 w-full ${isFixed ? 'fixed z-10' : ''}`}>
            
            <Link to={publicRoutes.LandingPage.path} type='link' className=' text-slate-600'>
                <img src={imagesLogo.main} className='lg:w-[15vw] md:w-[10vw] sm:w-[13vw]'/>
            </Link>

            <div className="w-full hidden md:flex">
            
                <div className='flex flex-row justify-end items-center w-full'>
                    <Link to={publicRoutes.LandingPage.path} type='link' className={` px-s7 py-s5 text-t3 font-body  ${page === pageIds.LandingPage ? "text-primary font-bold" : "text-gray-800" } `}>
                        {formatMessage({id:"home_link"})}
                    </Link>
                    
                    <Link to={publicRoutes.LandingPage.path} type='link' className='  px-s7 py-s5 text-t3 font-body text-gray-800 capitalize'>
                        {formatMessage({id:"pricing_link"})}
                    </Link>
                </div>
                    
                <div className='flex flex-row justify-end items-center gap-4 w-full'>
                    {
                        page !== pageIds.SignInPage 
                        &&
                        <Link to={publicRoutes.SignInPage.path} type='link'>
                            <LinkButton
                                type="secondary"
                                text={formatMessage({id:"sign_in_link"})}                   
                            />
                        </Link>
                    }

                    {
                        page !== pageIds.SignUpPage 
                        &&
                        <Link to={publicRoutes.SignUpPage.path} type='link' className=' text-slate-600'>
                            <DefaultButton
                                type="secondary"
                                bgWhite={false}
                                text={formatMessage({id:"sign_up_link"})}
                            />
                        </Link>
                    }

                    <LanguageSwitcher/>
                </div>

            </div>
                
            {/* Menu déroulant pour le header sur petit écran */}
            <div className="flex flex-col md:hidden relative">
                <FontAwesomeIcon icon={faBars} className="text-gray-700" onClick={showMenu} />
                <div className={`w-52 bg-white h-76 absolute -bottom-60 -right-[14rem] ${isSubmenuVisible ? "show-sub-menu" : "hide-sub-menu"}`}>
                    
                    <div className='flex flex-col justify-end items-center w-full'>
                        <Link to={publicRoutes.LandingPage.path} type='link' className={` px-s7 py-s5 text-t3 font-body w-full text-center hover:bg-primary hover:text-white ${page === pageIds.LandingPage ? "text-primary font-bold" : "text-gray-800" } `}>
                            {formatMessage({id:"home_link"})}
                        </Link>
                        
                        <Link to={publicRoutes.LandingPage.path} type='link' className='  px-s7 py-s5 text-t3 font-body w-full hover:bg-primary hover:text-white text-gray-800 text-center capitalize'>
                            {formatMessage({id:"pricing_link"})}
                        </Link>
                    </div>
                    
                    <div className='flex flex-col justify-end items-center gap-4 w-full pb-5'>
                    {
                        page !== pageIds.SignInPage 
                        &&
                        <Link to={publicRoutes.SignInPage.path} type='link'>
                            <LinkButton
                                type="secondary"
                                text={formatMessage({id:"sign_in_link"})}                   
                            />
                        </Link>
                    }

                    {
                        page !== pageIds.SignUpPage 
                        &&
                        <Link to={publicRoutes.SignUpPage.path} type='link' className='text-sm text-slate-600'>
                            <LinkButton
                                type="secondary"
                                text={formatMessage({id:"sign_up_link"})}
                            />
                        </Link>
                    }

                    <LanguageSwitcher/>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}