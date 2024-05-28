import React, { Fragment } from 'react';
import { useIntl } from 'react-intl';

export const SignUpPage : React.FC = () => {
    const {formatMessage} = useIntl();

    return <Fragment>
        <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
        <h1 className='font-bold font-heading text-t8 text-black capitalize'>
            {formatMessage({id:"happy_to_see_you_again"})}
        </h1>

            <div className=' capitalize text-4xl font-bold text-blue-300 tracking-wide'>
                {formatMessage({id:"sign_up_page"})}
            </div>
        </div>
        
    </Fragment>
}