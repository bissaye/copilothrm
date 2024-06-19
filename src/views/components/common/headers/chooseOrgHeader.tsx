import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../internationalisation';
import { pageIds } from '../../../../utils/constantes';
import { publicRoutes } from '../../../../services/routes/routes';
import { useIntl } from 'react-intl';
import { DefaultButton, LinkButton } from '../../ui';
import { useAuthStore, usePageStore } from '../../../../services/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { imagesLogo } from '../../../../assets/images';

export const ChooseOrgHeader : React.FC = () => {

    const {page} = usePageStore();

    const {formatMessage} = useIntl();
    const {signOut} = useAuthStore();

    // const [isFixed, setIsFixed] = useState(false);
    const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

    let orgHeaderTitle;
    switch(page) {
        case "ChooseOrg": {
            orgHeaderTitle = formatMessage({id: "chhose_an_org"});
            break;
        }
        case "AddOrganisation": {
            orgHeaderTitle = formatMessage({id: "add_org"});
            break;
        }
    }

    useEffect(() => {
        // const handleScroll = () => {
        //     const topOffset = window.scrollY;
        //     const shouldFix = topOffset > 100; 

        //     setIsFixed(shouldFix);
        // };

        // window.addEventListener('scroll', handleScroll);
        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };
    }, []);

    const showMenu = () => {
        setIsSubmenuVisible(prev => !prev)
    }

    const logout = async () => {
        await signOut()
    }


    return <Fragment>
        <div className={`bg-white h-[7rem] flex flex-row justify-between items-center p-4 shadow-md md:px-8 lg:gap-14 xl:px-15 w-full`}>
            {/* Logo Copilot */}
            <img src={imagesLogo.main} className='lg:w-[15vw] md:w-[10vw] sm:w-[13vw]'/>
            
            <div className="w-full hidden md:flex">
            
                <div className='flex flex-row justify-end items-center w-full'>
                    <h1 className='font-heading capitalize font-bold text-t5 md:text-t7'>{orgHeaderTitle}</h1>
                </div>
                    
                <div className='flex flex-row justify-end items-center gap-4 w-full'>

                    <DefaultButton
                        type="secondary"
                        bgWhite={false}
                        text={formatMessage({id:"logout_link"})}
                        onClick={logout}
                    />

                    <LanguageSwitcher/>
                </div>

            </div>
                
            {/* Menu déroulant pour le header sur petit écran */}
            <div className="flex flex-col md:hidden relative">
                <FontAwesomeIcon icon={faBars} className="text-gray-700" onClick={showMenu} />
                <div className={`w-52 bg-white h-76 absolute -bottom-60 -right-[14rem] ${isSubmenuVisible ? "show-sub-menu" : "hide-sub-menu"}`}>
                    
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

                    <LanguageSwitcher/>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}