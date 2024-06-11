import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useIntl } from "react-intl";
import { Fragment } from "react/jsx-runtime"
import { LinkButton } from "../components/ui";
import { useNavigateById } from "../../hooks";
import { pageIds } from "../../utils/constantes";
import { FooterLandingPage } from "../components/common";

export const ActivateAccount: React.FC = () => {

    //hooks
    const {formatMessage} = useIntl();
    const navigateById = useNavigateById();

    return(
        <Fragment>
            <main>
                <div className="h-full w-full flex flex-col justify-between items-center">
                    {/* Partie à ajouter au cas où le lien d'activation a expiré */}
                    
                    <div className="w-[500px] h-[300px] bg-white shadow-md flex flex-col justify-center items-center gap-5 mt-s12">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-primary text-6xl" />
                        <p className="text-2xl px-10 font-medium text-center">{formatMessage({id:"account_activated"})}</p>
                        <LinkButton
                                text= {formatMessage({id:"sign_in_link"})}
                                type='primary'
                                className='font-bold'
                                textSize={15}
                                onClick={() => {navigateById(pageIds.SignInPage)}}
                            />
                    </div>
                <FooterLandingPage/>
                </div>
            </main>
        </Fragment>
    )
}