import { useIntl } from "react-intl";
import { Department } from "../../../services/api/DTO/response"

interface DepartmentCardProps {
    departement: Department,
    onClick?: () => void
}

export const DepartmentCard: React.FC<DepartmentCardProps> = (props: DepartmentCardProps) => {
    const {departement, onClick} = props
    const {formatMessage} = useIntl();
    
    return <div 
    onClick={onClick}
    className="w-full h-36 border border-y-zinc-300 border-r-zinc-300 border-l-8 border-l-secondary px-7 py-3 shadow-md cursor-pointer transition ease-in-out duration-200 active:bg-neutral-300 hover:border-y-neutral-400 hover:border-r-neutral-400">
        <h1 className="text-t6 text-secondary font-bold">
            {departement.libelle}
        </h1>
        <p className="font-heading font-bold text-t5 text-neutral-500">
        {formatMessage({id:"head_department"})}: Giovani Tsague
        </p>
        <p className="font-heading font-bold text-t4 text-neutral-500">
            
        </p>
        <p className="font-heading font-bold text-t3 text-neutral-500 leading-4 overflow-hidden text-ellipsis h-16 ">
        {formatMessage({id:"number_employees"})}: 5 <br />
            Geovani Tsague <br />
            Stephane Zang <br />
            ...
        </p>

    </div>
}