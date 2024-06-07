import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DefaultButton, InputText } from "../../components/ui"
// import { useIntl } from "react-intl";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import DataTable from 'react-data-table-component';
import { Invitation } from "../../../utils/interfaces/type";
import { avatars } from "../../../assets/images";
import { faPencil } from "@fortawesome/free-solid-svg-icons/faPencil";
import "./style.css"
import { useIntl } from "react-intl";

export const InvitationPage: React.FC = () => {

    const {formatMessage} = useIntl();
    
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
            case 'Accepted':
                classname = 'bg-green-100 text-green-700 '
                break;
            case 'Pending':
                classname = 'bg-[#fff6cf] text-yellow-700 '
                break;
            case 'Rejected':
                classname = 'bg-red-100 text-red-700'
                break;
            case 'Expired':
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

    // const {formatMessage} = useIntl();
    const columns = [
        {
            name: 'Avatar',
            cell: (row: Invitation) => <img src={row.avatar} className="w-10"></img>,
            center: true
        },
        {
            name: formatMessage({id:"sender"}),
            selector: (row: Invitation) => row.sender,
            sortable: true,
            center: true
        },
        {
            name: formatMessage({id:"receiver"}),
            selector: (row: Invitation) => row.receiver,
            sortable: true,
            center: true
        },
        {
            name: 'Date',
            selector: (row: Invitation) => row.date,
            sortable: true,
            center: true
        },
        {
            name: 'Status',
            cell: (row: Invitation) => statusBadge(row.status),
            center: true
        },
        {
            name: 'Actions',
            cell: () => <div>{actionsList()}</div>,
            center: true
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
            status: 'Expired' as 'Pending' | 'Accepted' | 'Rejected' | 'Expired'
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
            >

            </DataTable>
        </div>
    )
}