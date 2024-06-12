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
import { ActivateUserData } from "../../services/api/DTO/request";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { toastify } from "../../utils/toasts";
import { useSpinnerStore } from "../../services/store";

export const ActivateAccount: React.FC = () => {

    //hooks
    const {formatMessage} = useIntl();
    const navigateById = useNavigateById();
    const { userServices } = useApiServices()
    const { activateUserAccount } = useUserUseCase(userServices)
    const [accountActivated, setAccountActivated] = useState<boolean | null>(null);
    const {showSpinner, hideSpinner} = useSpinnerStore()

    useEffect(() => {
        const url = location.href
        const token = url.split('?')[1]
        if (!token){
            console.log("pas de token")
        }
        else{
            async function activateAccount(){
                showSpinner()
                const body: ActivateUserData = {
                    userId: "",
                    validationCode: token
                }
                const response = await activateUserAccount(body);
                if(response.status == 200 || response.status == 201){
                    hideSpinner()
                    setAccountActivated(true)
                }
                else{
                    hideSpinner()
                    setAccountActivated(false)
                }
            }
            try{
                activateAccount();
            }
            catch(error: any){
                hideSpinner()
                setAccountActivated(false)
                toastify('error', error.message)
            }
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
                            <FontAwesomeIcon icon={faExclamation} className="text-red-400 text-6xl" />
                            <p className="text-2xl px-10 font-medium text-center">{formatMessage({id:"account_activated_error"})}</p>
                        </div>
                    }
                <FooterLandingPage/>
                </div>
            </main>
        </Fragment>
    )
}
