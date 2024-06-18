import React, { Fragment } from 'react';
import { FooterSignInPage, OrganizationHeader, Sidebar } from '../components/common';
import { Outlet } from 'react-router-dom';
import { usePageStore } from '../../services/store';

export const OrganizationBaseLayout : React.FC = () => {
    const { page } = usePageStore();

    return <Fragment>
        {page == "ChooseOrg" || page == "AddOrganisation" &&
            <>
            <OrganizationHeader/>
                <Outlet/>
            <FooterSignInPage/>
            </>
        }
        { page !== "ChooseOrg" && page !== "AddOrganisation" &&
        <>
            <OrganizationHeader/>
            <div className="flex flex-row gap-5">
                { page !== "ChooseOrg" && page !== "AddOrganisation" && <Sidebar />}
                <Outlet/>
            </div>
        </>
        }
    </Fragment>
}

