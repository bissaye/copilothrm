import React, { Fragment } from 'react';
import { InviteMemberModal } from '../components/common';
import { useInviteMemberStore } from '../../services/store';

export const HomePage : React.FC = () => {
    const {showInviteModal, setShowInviteModal} = useInviteMemberStore()

    return <Fragment>
        <div className=' w-full md:w-[900px] lg:w-[60%] h-full flex flex-col justify-start items-start px-10 py-5 border border-gray-500 rounded-md shadow-lg bg-white lg:overflow-x-hidden'>
            {showInviteModal && <InviteMemberModal onClose={() => setShowInviteModal(false)} />}
        </div>
    </Fragment>
}