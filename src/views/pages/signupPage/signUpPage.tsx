import React, { Fragment } from 'react';
import { useIntl } from 'react-intl';
import { Step1 } from './Step1';

export const SignUpPage : React.FC = () => {
    const {formatMessage} = useIntl();

    return <Fragment>
        <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
            <div className='flex flex-col items-center w-2/3 lg:min-h-[536px] rounded-xl mb-16 border-gray-500 p-4'>
                <h1 className='font-bold font-heading text-t8 text-black capitalize my-4'>
                    {formatMessage({id:"sign_up_link"})}
                </h1>
                <Step1 />
            </div>
        </div>
        
    </Fragment>
}