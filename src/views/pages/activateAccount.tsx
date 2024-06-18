import { faCheckCircle } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useIntl } from "react-intl";
import { Fragment } from "react/jsx-runtime"
import { LinkButton } from "../components/ui";
import { useNavigateById } from "../../hooks";
import { pageIds } from "../../utils/constantes";
import { FooterLandingPage } from "../components/common";
import { useEffect, useState } from "react";
import { useUserUseCase } from "../../services/api/usescases";
import { useApiServices } from "../../services/api/ApiServiceContext";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useSpinnerStore } from "../../services/store";
import { useLocation, useParams } from "react-router-dom";

export const ActivateAccount: React.FC = () => {

    //hooks
    const {formatMessage} = useIntl();
    const navigateById = useNavigateById();
    const { userServices } = useApiServices()
    const { activateUserAccount } = useUserUseCase(userServices)
    const [accountActivated, setAccountActivated] = useState<boolean | null>(null);
    const [message, setMessage] = useState('')
    const {showSpinner, hideSpinner} = useSpinnerStore()
    const NavigateById = useNavigateById()

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    
    useEffect(() => {
        debugger
        if (!token || token == ''){
            NavigateById(pageIds.SignInPage)
        }
        else{

            async function activateAccount(){
                showSpinner()
                debugger
                try{
                    await activateUserAccount(token!).then(response => {
                        debugger
                        hideSpinner()
                        setMessage(response.message)
                        setAccountActivated(true)
                    });
                }catch(error: any){
                    debugger
                    hideSpinner()
                    setMessage(error.message)
                    setAccountActivated(false)
                }
            }
        
            activateAccount();
        }
    }, [])

    return(
        <Fragment>
            <main>
                <div className="h-full w-full flex flex-col justify-between items-center">
                    { accountActivated ?
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
                    :

                        <div className="w-[500px] h-[300px] bg-white shadow-md flex flex-col justify-center items-center gap-5 mt-s12">
                            <FontAwesomeIcon icon={faExclamationCircle} className="text-red-400 text-6xl" />
                            <p className="text-2xl px-10 font-medium text-center">
                                {formatMessage({id:"account_activated_error"})} <br />
                                {message}
                                </p>
                        </div>
                    }
                <FooterLandingPage/>
                </div>
            </main>
        </Fragment>
    )
}
