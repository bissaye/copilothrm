import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DefaultButton, InputText } from "../../components/ui"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import DataTable from 'react-data-table-component';
import { faPencil } from "@fortawesome/free-solid-svg-icons/faPencil";
import "./style.css"
import { useIntl } from "react-intl";
import { useEffect, useState } from "react";
import { useApiServices } from "../../../services/api/ApiServiceContext";
import { useInvitationUseCase } from "../../../services/api/usescases";
import { useSpinnerStore } from "../../../services/store";
import { toastify } from "../../../utils/toasts";
import { Invitation, StaffOrganisation } from "../../../services/api/DTO/response";
import { avatars } from "../../../assets/images";

export const InvitationPage: React.FC = () => {

    const {formatMessage} = useIntl();
    const [invitationList, setInvitationList] = useState<Invitation[] | null >(null);
    const {showSpinner, hideSpinner} = useSpinnerStore();
    const {invitationService} = useApiServices();
    const {getAllInvitations} = useInvitationUseCase(invitationService)
    const currentOrg: StaffOrganisation = localStorage.getItem('currentOrg') ? JSON.parse(localStorage.getItem('currentOrg')!) : null;
    
    useEffect(() => {
        async function getInvitations() {
            try{
                if(currentOrg){
                    showSpinner()
                    await getAllInvitations(currentOrg.organisationId, 0, 10).then(response => {
                        const data = response.content.data
                        setInvitationList(data)
                        hideSpinner()
                    })
                }
            }
            catch(error: any){
                hideSpinner()
                toastify('error', error.message)
            }
        }

        getInvitations()
    }, [])
    
    const actionsList = () => {
        return(
            <div>
                <button
                >
                    <FontAwesomeIcon icon={faPencil} />
                </button>
            </div>
        )
    }

    const statusBadge = (status: string) => {
        let classname;
        switch(status){
            case 'ACCEPTED':
                classname = 'bg-green-100 text-green-700 '
                break;
            case 'PENDING':
                classname = 'bg-[#fff6cf] text-yellow-700 '
                break;
            case 'REJECTED':
                classname = 'bg-red-100 text-red-700'
                break;
            case 'EXPIRED':
            classname = 'bg-gray-100 text-gray-700 '
            break;
        }
        return (
            <div className="h-full w-full flex justify-center items-center">
                <span
                className={`w-[70px] text-t1 text-center rounded-[30px] px-2 py-1 self-center font-bold ${classname}`}
                >
                    {status}
                </span>
            </div>
        )
    }

    const tableCustomStyles = {
        headRow: {
            style: {
              backgroundColor: 'rgb(245 245 245)',
            },
        },
        headCells: {
            style: {
              color: 'rgb(82 82 82)',
            },
        },
        rows: {
            style: {
              height: '50px',
              backgroundColor: 'inherit',
              '&:nth-of-type(even)': {
                backgroundColor: 'rgb(245 245 245)',
              },
              '&:nth-of-type(odd)': {
                backgroundColor: 'rgb(255 255 255)',
              }
            },
        },
        cells:{
            style: {
                color: 'rgb(23 23 23)',
            }
        },
        table: {
            style: {
                boxShadow: '0 10px 10px rgba(0, 0, 0)',
                border: 'Opx solid #000'
            }
        }
    }

    const columns = [
        {
            name: 'Avatar',
            cell: () => <img src={avatars.avatarLandingPage} className="w-10"></img>,
            center: true
        },
        {
            name: formatMessage({id:"sender"}),
            cell: (row: Invitation) => row.senderName,
            sortable: true,
            center: true
        },
        {
            name: formatMessage({id:"receiver"}),
            cell: (row: Invitation) => row.emailDestinataire,
            sortable: true,
            center: true
        },
        {
            name: 'Date',
            cell: (row: Invitation) => new Date(row.dateEnvoi).toDateString(),
            sortable: true,
            center: true
        },
        {
            name: 'Status',
            cell: (row: Invitation) => statusBadge(row.nomStatus),
            center: true
        },
        {
            name: 'Actions',
            cell: () => <div>{actionsList()}</div>,
            center: true
        }
    ]

    const data = invitationList ? invitationList.map((invitation) => {
        return {
            inviteId: invitation.inviteId,
            emailDestinataire: invitation.emailDestinataire,
            senderName: invitation.senderName,
            dateEnvoi: invitation.dateEnvoi,
            nomStatus: invitation.nomStatus
        }
    }) : []

    const noDataMessage = <span className="m-10 py-5 px-5 bg-gray-300 text-zinc-600 w-full text-center rounded-md shadow-md hover:bg-gray-250">{formatMessage({id:"no_invitations_for_this_org"})}</span>
    
    return(
        <div className=' w-full md:w-[900px] lg:w-[76%] h-full flex flex-col justify-start items-start gap-5 px-10 py-5 bg-white lg:overflow-x-hidden'>
            <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-secondary text-t7" />
                <h1 className="text-t6 font-heading font-bold">
                    Invitations
                </h1>
            </div>

            {/* Searchbar */}
            <div className="flex flex-row w-72">
                <div className="w-full">
                    <InputText 
                        id={"search_term"} 
                        name={"search_term"}
                        placeholder="Rechercher..."
                    />
                </div>
                
                <DefaultButton 
                    type={"primary"} 
                    text=""
                    icon={faMagnifyingGlass} 
                    bgWhite={false}
                    typeForm="submit"
                    textSize={12}
                    height={42}
                    // width={100}
                    className="font-bold rounded-l-none rounded-r-md"
                />
            </div>

            {/* Liste des invitations */}
            <DataTable
            columns={columns}
            data={data}
            selectableRows
            fixedHeader
            pagination
            customStyles={tableCustomStyles}
            noDataComponent={noDataMessage}
            >

            </DataTable>
        </div>
    )
}