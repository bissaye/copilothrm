import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DefaultButton, InputText } from "../../components/ui"
import { useIntl } from "react-intl";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import DataTable from 'react-data-table-component';
import { Invitation } from "../../../utils/interfaces/type";
import { avatars } from "../../../assets/images";
import { faPencil } from "@fortawesome/free-solid-svg-icons/faPencil";

export const InvitationPage: React.FC = () => {

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

    // const {formatMessage} = useIntl();
    const columns = [
        {
            name: 'Avatar',
            cell: (row: Invitation) => <img src={row.avatar} className="w-10"></img>
        },
        {
            name: 'Emetteur',
            selector: (row: Invitation) => row.sender,
            sortable: true
        },
        {
            name: 'Invité',
            selector: (row: Invitation) => row.receiver,
            sortable: true
        },
        {
            name: 'Date',
            selector: (row: Invitation) => row.date,
            sortable: true
        },
        {
            name: 'Status',
            selector: (row: Invitation) => row.status
        },
        {
            name: 'Actions',
            cell: (row: Invitation) => <div>{actionsList()}</div>
        }
    ]

    const data = [
        {
            id: 1,
            avatar: avatars.avatarLandingPage,
            receiver: 'Stephane Zang',
            sender: 'Geovani Tsague',
            date: new Date().toDateString(),
            status: 'Rejected' as 'Pending' | 'Accepted' | 'Rejected' | 'Expired'
        },
        {
            id: 2,
            avatar: avatars.avatarLandingPage,
            receiver: 'Martial Kom',
            sender: 'Franck Bissaye',
            date: new Date().toDateString(),
            status: 'Accepted' as 'Pending' | 'Accepted' | 'Rejected' | 'Expired'
        },
        {
            id: 3,
            avatar: avatars.avatarLandingPage,
            receiver: 'Olive Mengolo',
            sender: 'Geovani Tsague',
            date: new Date().toDateString(),
            status: 'Pending' as 'Pending' | 'Accepted' | 'Rejected' | 'Expired'
        },
        {
            id: 4,
            avatar: avatars.avatarLandingPage,
            receiver: 'Franck Bissaye',
            sender: 'Geovani Tsague',
            date: new Date().toDateString(),
            status: 'Pending' as 'Pending' | 'Accepted' | 'Rejected' | 'Expired'
        },
        {
            id: 5,
            avatar: avatars.avatarLandingPage,
            receiver: 'Karlson Kembou',
            sender: 'Rodrigue Tahago',
            date: new Date().toDateString(),
            status: 'Accepted' as 'Pending' | 'Accepted' | 'Rejected' | 'Expired'
        },
        {
            id: 6,
            avatar: avatars.avatarLandingPage,
            receiver: 'Christian Tchuente',
            sender: 'Geovani Tsague',
            date: new Date().toDateString(),
            status: 'Accepted' as 'Pending' | 'Accepted' | 'Rejected' | 'Expired'
        }
    ]
    
    return(
        <div className=' w-full md:w-[900px] lg:w-[76%] h-full flex flex-col justify-start items-start gap-5 px-10 py-5 border border-gray-500 rounded-md shadow-lg bg-white lg:overflow-x-hidden'>
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
            >

            </DataTable>
        </div>
    )
}