import { useNavigateById } from "../../../hooks";
import { useApiServices } from "../../../services/api/ApiServiceContext";
import { useStaffUseCase, useUserUseCase } from "../../../services/api/usescases";
import { useEffect } from "react";
import { useSpinnerStore } from "../../../services/store";
import { useLocation } from "react-router-dom";
import { pageIds } from "../../../utils/constantes";
import { UserData } from "../../../services/api/DTO/response";
import { JoinOrganisation } from "../../../services/api/DTO/request";
import { toastify } from "../../../utils/toasts";

export const RejoindreOrganizationPage: React.FC = () => {
    //hooks
    const navigateById = useNavigateById();
    const { userServices, staffService } = useApiServices()
    const { checkUserExists } = useUserUseCase(userServices)
    const { joinOrganisation } = useStaffUseCase(staffService)
    const {showSpinner, hideSpinner} = useSpinnerStore()

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams.entries)
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
                navigateById(pageIds.SignInPage)
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
                    const invitation = {
                        username: username,
                        orgId: orgId
                    }
                    localStorage.setItem('invitation', JSON.stringify(invitation))
                    navigateById(pageIds.SignUpFromInvitationPage)
                    toastify('error', error.message)
                }
            }
        }

        redirectUser()
    }, [])
    return <div>
        Rejoignez l'organisation
    </div>
}