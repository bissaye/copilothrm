import React, { Fragment } from 'react';
import { useIntl } from 'react-intl';
import "./style.css";
import { LandingPageSlider } from '../../components/common/sliders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCheck, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export const LandingPage : React.FC = () => {

    const {formatMessage} = useIntl();

    return <Fragment>
        <div className='landingPageContent w-full flex flex-col bg-primary-50'>
            <div className=' h-[30rem] capitalize text-4xl font-bold text-white bg-white flex flex-col justify-center text-center tracking-wide'>
                <LandingPageSlider />
            </div>
            <div className=' h-96 px-48 capitalize text-4xl font-bold text-primary bg-white flex flex-row justify-between items-center tracking-wide'>
                <div className='flex flex-col justify-center'>
                    <FontAwesomeIcon icon={faUserCircle} className="text-8xl text-black mb-3" />
                    <span className='flex flex-col justify-center items-center'>
                        <p className="text-primary-100">{"2750"}</p>
                        <p className="font-thin text-black text-[25px]">{formatMessage({id: "user"})}</p>
                    </span>
                </div>
                <div className='flex flex-col justify-center'>
                    <FontAwesomeIcon icon={faBuilding} className="text-8xl text-black mb-3" />
                    <span className='flex flex-col justify-center items-center'>
                        <p className="text-primary-100">{"2750"}</p>
                        <p className="font-thin text-black text-[25px]">{formatMessage({id: "entreprise"})}</p>
                    </span>
                </div>
                <div className='flex flex-col justify-center'>
                    <FontAwesomeIcon icon={faCheck} className="text-8xl text-black mb-3" />
                    <span className='flex flex-col justify-center items-center'>
                        <p className="text-primary-100">{"2750"}</p>
                        <p className="font-thin text-black text-[25px]">{formatMessage({id: "positive_reviews"})}</p>
                    </span>
                </div>
            </div>
            <div className=' h-60 capitalize text-4xl font-bold text-white bg-primary-300 flex flex-col justify-center text-center tracking-wide'>
                {"Footer"}
            </div>
        </div>
    </Fragment>
}