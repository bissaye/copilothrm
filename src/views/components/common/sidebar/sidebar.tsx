import { useIntl } from "react-intl";
import { DefaultButton, LinkButton, SideBarMenuLink } from "../../ui"
import "./style.css"
import { faCircleLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { avatars } from "../../../../assets/images";
import { Link } from "react-router-dom";
import { MANAGER_SIDEBAR_MENU_ITEMS } from "../../../../services/sidebar-menu-items";
import { useInviteMemberStore, usePageStore } from "../../../../services/store";
import { InviteMemberModal } from "../modals";
import { useNavigateById } from "../../../../hooks";
import { pageIds } from "../../../../utils/constantes";
import { UserData } from "../../../../services/api/DTO/response";
export const Sidebar : React.FC = () => {

    const {formatMessage} = useIntl();
    const {showInviteModal, setShowInviteModal} = useInviteMemberStore()
    const { page } = usePageStore();
    const navigateById = useNavigateById();

    const sidebarMenuItems = MANAGER_SIDEBAR_MENU_ITEMS;

    const user: UserData = JSON.parse(localStorage.getItem("user")!)

    const loggedUser = user.staff;

return(
    <div className="sidebar md:w-[260px] ld:w-[300px] rounded-xl border border-gray-500 shadow-lg shadow-zinc-300 ml-8 px-5 hidden md:flex md:flex-col gap-5">
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
                radius='md'
                className=" hover:bg-primary-550"
                onClick={() => setShowInviteModal(true)}
            />
            <div className='flex flex-row justify-evenly gap-4 items-start h-[40px] mb-3'>
                <div className="relative">
                    <img src={avatars.avatarLandingPage} className='w-9 h-9 rounded-full'/>
                    <span className="h-3 w-3 rounded-full border-white border-[1.5px] bg-emerald-400 absolute bottom-[0.01rem] left-7"></span>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <h1 className=' font-body font-bold text-black text-t3'>
                        {loggedUser.nom} {loggedUser.prenom}
                    </h1>
                    <LinkButton
                        text= {formatMessage({id:"view_profile"})}
                        className='w-full text-neutral-500 hover:text-neutral-600 hover:underline'
                        textSize={15}
                        onClick={() => {navigateById(pageIds.Profile)}}
                    />
                </div>
            </div>
        </div> 
        <LinkButton
            type="primary"
            text={formatMessage({id:"chhose_an_org"})}
            width={237}
            icon={faCircleLeft}
            onClick={() => navigateById(pageIds.ChooseOrg)}
            className="mb-5"
        />
        {showInviteModal && <InviteMemberModal onClose={() => setShowInviteModal(false)} />}
    </div>
)
}