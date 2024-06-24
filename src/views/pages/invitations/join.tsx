import { useNavigateById } from "../../../hooks";
import { useApiServices } from "../../../services/api/ApiServiceContext";
import { useInvitationUseCase, useStaffUseCase, useUserUseCase } from "../../../services/api/usescases";
import { Fragment, useEffect } from "react";
import { useSpinnerStore } from "../../../services/store";
import { useLocation } from "react-router-dom";
import { pageIds } from "../../../utils/constantes";
import { CheckInvitationValidityResponseData, UserData } from "../../../services/api/DTO/response";
import { toastify } from "../../../utils/toasts";
import { useIntl } from "react-intl";
import { FooterLandingPage } from "../../components/common";
import "./style.css"

export const RejoindreOrganizationPage: React.FC = () => {
    //hooks
    const navigateById = useNavigateById();
    const { userServices, staffService, invitationService } = useApiServices()
    const { checkUserExists } = useUserUseCase(userServices)
    const { checkInvitationValidity } = useInvitationUseCase(invitationService)
    const { joinOrganisation } = useStaffUseCase(staffService)
    const { formatMessage } = useIntl();
    const { showSpinner, hideSpinner } = useSpinnerStore()

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    
    useEffect(() => {
        async function redirectUser() {
            if( !token || token == ''){
                navigateById(pageIds.SignInPage)
            }
            else{
                showSpinner()
                await checkInvitationValidity(token).then(async (response) => {
                    debugger
                    const invitationData: CheckInvitationValidityResponseData = response.content
                    await checkUserExists(token).then(async (res) => {
                        debugger
                        const user: UserData = (localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")!) : null
                        if(!user){
                            navigateById(pageIds.SignInPage)
                        }
                        else {
                            if(user.staff.email == invitationData.email){
                                if(user.accessToken){
                                    await joinOrganisation(token).then(response => {
                                        debugger
                                        hideSpinner()
                                        navigateById(pageIds.ChooseOrg)
                                        toastify('success', response.message)
                                    })
                                    .catch((error) => {
                                        hideSpinner()
                                        toastify('error', error.message)
                                    })
                                }
                                else {
                                    hideSpinner()
                                    navigateById(pageIds.SignInPage, {
                                        invitationToken: token,
                                        invitationData: invitationData
                                    })
                                }
                            }
                            else {
                                hideSpinner()
                                navigateById(pageIds.SignInPage, {
                                    invitationToken: token,
                                    invitationData: invitationData
                                })
                            }
                        }
                    })
                    .catch((error) => {
                        debugger
                        hideSpinner()
                        toastify('error', error.message)
                    })
                          
                })
            }
        }

        redirectUser()
    }, [])
    return <Fragment>
        <div className="container w-full flex flex-col justify-center items-center">
            <div className="w-2/3 px-10 py-5 rounded-md shadow-md text-center border border-gray-100">
                <p className="font-heading font-bold text-t8 text-secondary-900">{formatMessage({id:"join_organization"})}</p>
            </div>
        </div>

        <FooterLandingPage />
    </Fragment>
}