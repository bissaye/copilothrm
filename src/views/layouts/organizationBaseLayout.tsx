import React, { Fragment } from 'react';
import { OrganizationHeader, Sidebar } from '../components/common';
import { Outlet } from 'react-router-dom';

export const OrganizationBaseLayout : React.FC = () => {

    return <Fragment>

        <OrganizationHeader/>
        <Sidebar />
        <Outlet/>

    </Fragment>
}