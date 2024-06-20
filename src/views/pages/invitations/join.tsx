import { useNavigateById } from "../../../hooks";
import { useApiServices } from "../../../services/api/ApiServiceContext";
import { useStaffUseCase, useUserUseCase } from "../../../services/api/usescases";
import { Fragment, useEffect } from "react";
import { useSpinnerStore } from "../../../services/store";
import { useLocation } from "react-router-dom";
import { pageIds } from "../../../utils/constantes";
import { UserData } from "../../../services/api/DTO/response";
import { JoinOrganisation } from "../../../services/api/DTO/request";
import { toastify } from "../../../utils/toasts";
import { useIntl } from "react-intl";
import { FooterLandingPage } from "../../components/common";
import "./style.css"

export const RejoindreOrganizationPage: React.FC = () => {
    //hooks
    const navigateById = useNavigateById();
    const { userServices, staffService } = useApiServices()
    const { checkUserExists } = useUserUseCase(userServices)
    const { joinOrganisation } = useStaffUseCase(staffService)
    const { formatMessage } = useIntl();
    const { showSpinner, hideSpinner } = useSpinnerStore()

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const username = queryParams.get('username');
    const orgId = queryParams.get('orgId');
    
    useEffect(() => {
        async function joinOrg(body: JoinOrganisation){
            await joinOrganisation(body).then(response => {
                toastify('success', response.message)
                hideSpinner()
            })
        }
        async function redirectUser() {
            if(!username || !orgId || username == '' || orgId == ''){
                // navigateById(pageIds.SignInPage)
            }
            else{
                try{
                    showSpinner()
                    await checkUserExists(username).then(response => {
                    if(response.status == 200 || response.status == 204){
                        const user: UserData = JSON.parse(localStorage.getItem("user")!)
                        if(user?.staff.user.username == username){
                            if(user?.accessToken){
                                const body: JoinOrganisation = { username: username, idOrganisation: orgId}
                                try
                                {
                                    joinOrg(body)
                                }
                                catch(error: any)
                                {
                                    hideSpinner()
                                    toastify('error', error.message)
                                }
                            }
                            else{
                                const invitation = {
                                    username: username,
                                    orgId: orgId
                                }
                                localStorage.setItem('invitation', JSON.stringify(invitation))
                                navigateById(pageIds.SignInPage)
                            }
                        }
                        else {
                            const invitation = {
                                username: username,
                                orgId: orgId
                            }
                            localStorage.setItem('invitation', JSON.stringify(invitation))
                            navigateById(pageIds.SignInPage)
                        }
                    }})
                }
                catch(error: any){
                    hideSpinner()
                    const data = {
                        invitation: {
                            username: username,
                            orgId: orgId
                        }
                    }
                    navigateById(pageIds.SignUpFromInvitationPage, data)
                    console.log(error.message)
                }
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