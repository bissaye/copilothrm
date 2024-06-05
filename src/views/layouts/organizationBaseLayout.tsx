import React, { Fragment } from 'react';
import { OrganizationHeader, Sidebar } from '../components/common';
import { Outlet } from 'react-router-dom';
import { usePageStore } from '../../services/store';

export const OrganizationBaseLayout : React.FC = () => {
    const { page } = usePageStore();
    return <Fragment>

        { page !== "ChooseOrg" &&<OrganizationHeader/>}
        <div className="flex flex-row gap-5">
            { page !== "ChooseOrg" && <Sidebar />}
            <Outlet/>
        </div>
        

    </Fragment>
}