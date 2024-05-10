import React, { Fragment } from 'react';
import { PublicHeader } from '../components/common';
import { Outlet } from 'react-router-dom';

export const PublicBaseLayout : React.FC = () => {

    return <Fragment>

        <PublicHeader/>
        <Outlet/>

    </Fragment>
}