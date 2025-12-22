import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';

interface UserNoticeProps {
    avatar: string;
    name : string;
    date : Date;
    rate : 1|2|3|4|5;
    comment : string;
}

export const UserNotice : React.FC<UserNoticeProps> =  (props: UserNoticeProps) => {
    const {avatar, name, date, rate, comment} = props;

    return <Fragment>
        <div className=' lg:min-w-[574px] max-w-[574px] w-[350px] max-h-[250px] md:h-[119px] p-2 border border-gray-400 bg-white shadow-xs flex flex-col justify-start items-start gap-6'>
           <div className='flex flex-row justify-evenly gap-4 items-start h-[40px]'>
                <img src={avatar} className='w-9 h-9 rounded-full'/>
                <div className="flex flex-col md:flex-row">
                    <div className='h-full flex flex-col justify-between items-start'>
                        <h1 className=' font-body font-bold text-black text-t3 capitalize'>
                            {name}
                        </h1>
                        <div className='flex'>
                            {
                                Array(rate).map(( _, index) => (
                                    <FontAwesomeIcon key={`rated-${index}`} icon={faStar} className=' text-yellowcustom text-t1'></FontAwesomeIcon>
                                ))
                                
                            }
                            {
                                Array(5-rate).map(( _, index) => (
                                    <FontAwesomeIcon key={`unrated-${index}`} icon={faStarReg} className=' text-yellowcustom text-t1'></FontAwesomeIcon>
                                ))
                            }
                            
                        </div>
                    </div>
                    <p className=' text-gray-700 text-t2 font-body'>
                        il y a {Math.round((new Date().getTime()- date.getTime())/(1000*3600*24))} jour(s)
                    </p>
                </div>
           </div>
           <p className='w-full text-black text-t3'>
                {
                    comment.split('').slice(0, 165).join('') + '...'
                }
            </p>
        </div>
    </Fragment>
}