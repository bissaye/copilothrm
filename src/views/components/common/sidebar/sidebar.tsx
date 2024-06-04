import { useIntl } from "react-intl";
import { DefaultButton, SideBarMenuLink } from "../../ui"
import "./style.css"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { avatars } from "../../../../assets/images";
import { Link } from "react-router-dom";
import { MANAGER_SIDEBAR_MENU_ITEMS } from "../../../../services/sidebar-menu-items";
import { useInviteMemberStore, usePageStore } from "../../../../services/store";
import { InviteMemberModal } from "../modals";
export const Sidebar : React.FC = () => {

    const {formatMessage} = useIntl();
    const {showInviteModal, setShowInviteModal} = useInviteMemberStore()
    const { page } = usePageStore();

    const sidebarMenuItems = MANAGER_SIDEBAR_MENU_ITEMS;

return(
    <div className="sidebar md:w-[260px] ld:w-[15%] rounded-xl border border-gray-500 shadow-lg shadow-zinc-300 ml-8 px-5 hidden md:flex md:flex-col gap-5">
        <div className=" h-[80%] w-full mt-5 flex flex-col gap-0.5">
            {
                sidebarMenuItems.map((item, index) =>
                    <Link to={item.path} type='link' key={index}>
                        <SideBarMenuLink
                            selected={page === item.id}
                            icon={item.icon}
                            widthFull={true}
                            // textSize={18}
                            text={formatMessage({id:item.title})}                  
                        />
                    </Link> 
                )
            }
        </div> 
        <div className=" h-[18%] w-full mb-5 flex flex-col justify-center items-center gap-3">
            <DefaultButton
                type="primary"
                bgWhite={false}
                widthFull={true}
                icon={faPlus}
                text={formatMessage({id:"invite_member"})}
                className="rounded-sm"
                onClick={() => setShowInviteModal(true)}
            />
            <div className='flex flex-row justify-evenly gap-4 items-start h-[40px]'>
                <div className="relative">
                    <img src={avatars.avatarLandingPage} className='w-9 h-9 rounded-full'/>
                    <span className="h-3 w-3 rounded-full border-white border-[1.5px] bg-emerald-400 absolute bottom-[0.01rem] left-7"></span>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <h1 className=' font-body font-bold text-black text-t3 capitalize'>
                        Amanda
                    </h1>
                    <p className='w-full text-black text-t1'>
                        {formatMessage({id:"view_profile"})}
                    </p>
                </div>
            </div>
        </div> 
        {showInviteModal && <InviteMemberModal onClose={() => setShowInviteModal(false)} />}
    </div>
)
}