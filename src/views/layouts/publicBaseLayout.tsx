import React, { Fragment } from 'react';
import { AppHeader } from '../components/common';
import { Outlet } from 'react-router-dom';

export const PublicBaseLayout : React.FC = () => {

    return <Fragment>

        <AppHeader/>
        <Outlet/>
    </Fragment>
}