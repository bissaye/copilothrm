import React, {Fragment} from "react";
import { FooterSignInPage } from "../components/common";
import { imagesLogo, avatars} from "../../assets/images";
import { DefaultButton } from "../components/ui";
import { faArrowLeft, faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAuthStore } from "../../services/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigateById } from "../../hooks";
import { pageIds } from "../../utils/constantes";
import { useIntl } from "react-intl";

export const ChooseOrg: React.FC = () => {
    const {formatMessage} = useIntl();
    const {signOut} = useAuthStore();
    const NavigateById = useNavigateById();

    const organisations = [
        {
            name: "Abyster Consulting",
            img: "data:image/jpeg;base64,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",
            members: 14,
            users1: avatars.avatarLandingPage,
            users2: avatars.avatarLandingPage,
            users3: avatars.avatarLandingPage,
        },
        {
            name: "Google",
            img:"data:image/png;base64,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",
            members: 1423,
            users1: avatars.avatarLandingPage,
            users2: avatars.avatarLandingPage,
            users3: avatars.avatarLandingPage,
        },
        {
            name: "Moavis",
            img: "data:image/jpeg;base64,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",
            members: 26,
            users1: avatars.avatarLandingPage,
            users2: avatars.avatarLandingPage,
            users3: avatars.avatarLandingPage,
        }
    ]
    return <Fragment>
        <div className="flex flex-col justify-between items-center w-full h-screen pt-7 gap-8">
            <img src={imagesLogo.main}/>
            <div>
                <h1 className=" font-heading font-bold text-t8 text-center">
                    {formatMessage({id:"welcome_back"})}
                </h1>
                <p className="font-body text-t6 text-center my-3">
                    {formatMessage({id:"choose_a_workspace_below"})} <br/>
                    pour travailler à nouveau avec votre equipe
                </p>
            </div>
            
            <div className="lg:w-[676px] min-w-[350px] flex flex-col justify-start items-start rounded-m border border-gray-250">
                <div className=" bg-gray-400 w-full">
                    <p className=" px-4 py-3 font-heading text-t3">
                        <span className="text-gray-800">{formatMessage({id:"organization_for"})}</span>
                        <span className="text-black font-bold">&nbsp;user@gmail.com</span>
                    </p>
                </div>
                <div className=" max-h-56 w-full flex flex-col justify-start items-start overflow-x-hidden overflow-y-scroll">
                    {
                        organisations.map((organisation, index) => (
                            <div className=" h-28 w-full pl-2 lg:pr-12 py-3 flex flex-row justify-between items-center border border-gray-250" key={`org-table-row-${index}`}>
                                <div className=" h-full flex flex-row justify-between items-center gap-2 ">
                                    <img className=" w-s16 h-s16 rounded-xl shadow-l" src={organisation.img} />
                                    <div className="h-full flex flex-col justify-around items-start">
                                        <h1 className="font-body font-bold text-black text-t3">
                                            {organisation.name}
                                        </h1>
                                        <div className="flex">
                                            <img className="rounded-full w-5 h-5" src={organisation.users1}/>
                                            <img className="rounded-full w-5 h-5" src={organisation.users2}/>
                                            <img className="rounded-full w-5 h-5" src={organisation.users3}/>
                                            <span className="text-gray-800 text-t2 font-body">  {organisation.members} {formatMessage({id:"members"})}</span>
                                        </div>
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faArrowRight} onClick={()=>{NavigateById(pageIds.HomePage)}} className=" border border-slate-600 p-1 w-4 rounded-full cursor-pointer hover:text-primary hover:border-primary"/>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col gap-4">

                <DefaultButton
                    type="primary"
                    bgWhite={false}
                    text={formatMessage({id:"add_an_organization"})}
                    width={237}
                    icon={faPlus}
                />

                <DefaultButton
                    type="secondary"
                    bgWhite={false}
                    text={formatMessage({id:"sign_out"})}
                    width={237}
                    icon={faArrowLeft}
                    onClick={() => {
                        signOut()
                    }}
                />
            </div>
            <FooterSignInPage/>
        </div>
    </Fragment>
}