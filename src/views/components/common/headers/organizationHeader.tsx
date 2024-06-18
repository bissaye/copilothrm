import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '../internationalisation';
import { pageIds } from '../../../../utils/constantes';
import { managerRoutes, publicRoutes } from '../../../../services/routes/routes';
import { useIntl } from 'react-intl';
import { DefaultButton, LinkButton } from '../../ui';
import { useAuthStore, usePageStore } from '../../../../services/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import "./style.css"

export const OrganizationHeader : React.FC = () => {

    const {page} = usePageStore();

    const {formatMessage} = useIntl();
    const {signOut} = useAuthStore();

    const [isFixed, setIsFixed] = useState(false);
    const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);

    let orgHeaderTitle;
    switch(page) {
        case "ChooseORg": {
            orgHeaderTitle = formatMessage({id: "chhose_an_org"});
            break;
        }
        case "AddOrganisation": {
            orgHeaderTitle = formatMessage({id: "add_org"});
            break;
        }
        default: {
            orgHeaderTitle = localStorage.getItem("currentOrg") ? JSON.parse(localStorage.getItem("currentOrg")!) : null;
            break;
        }
    }

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

    const logout = async () => {
        await signOut()
    }


    return <Fragment>
        <div className={`bg-white h-[7rem] flex flex-row justify-between items-center p-4 md:px-8 lg:gap-14 xl:px-15 w-full ${isFixed ? 'fixed z-10' : ''}`}>
            <div className='h-full shadow-m border border-gray-500 rounded rounded-8'>
                <Link to={managerRoutes.HomePage.path} type='link'
                className=' text-slate-600 h-full flex justify-center items-center md:w-[260px] ld:w-[300px]'
                >
                    <img 
                    src="data:image/jpeg;base64,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"
                    className='h-full w-[60%] object-cover'/>
                </Link>
            </div>
            

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