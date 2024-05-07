import React, { Fragment } from 'react';
import { useIntl } from 'react-intl';
import { imagesLogo } from '../../assets/images';

export const LandingPage : React.FC = () => {

    const {formatMessage} = useIntl();

    return <Fragment>
        <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
            <img src={imagesLogo.main} className='lg:w-[30vw] md:w-[50vw] sm:w-[50vw]'/>
            <div className=' capitalize text-4xl font-bold text-blue-300 tracking-wide'>
                {formatMessage({id: "landing_Page"})}
            </div>
        </div>
    </Fragment>
}