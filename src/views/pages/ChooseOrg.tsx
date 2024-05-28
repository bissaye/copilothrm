import React, {Fragment} from "react";
import { FooterSignInPage } from "../components/common";
import { imagesLogo } from "../../assets/images";
import { DefaultButton } from "../components/ui";
import { faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAuthStore } from "../../services/store";

export const ChooseOrg: React.FC = () => {
    const {signOut} = useAuthStore();
    return <Fragment>
        <div className="flex flex-col justify-between items-center w-full h-screen pt-7 gap-7">
            <img src={imagesLogo.main}/>
            <div>
                <h1 className=" font-heading font-bold text-t8 text-center">
                Bon retour parmi nous 
                </h1>
                <p className="font-body text-t6 text-center my-3">
                    Choisissez un espace de travail ci-dessous <br/>
                    pour travailler à nouveau avec votre equipe
                </p>
            </div>
            <div className="flex flex-col gap-4">

                <DefaultButton
                    type="primary"
                    bgWhite={false}
                    text="Ajouter une organisation"
                    width={237}
                    icon={faPlus}
                />
                
                <DefaultButton
                    type="secondary"
                    bgWhite={false}
                    text="Se déconnecter"
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