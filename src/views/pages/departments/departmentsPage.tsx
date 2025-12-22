import { faFolder } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useIntl } from "react-intl";
import { DepartmentCard } from "./departmentCard";
import { DefaultButton } from "../../components/ui";
import { faPencil, faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { avatars } from "../../../assets/images";
import { useEffect, useState } from "react";
import { useApiServices } from "../../../services/api/ApiServiceContext";
import { Department, StaffOrganisationContent } from "../../../services/api/DTO/response";
import { useDepartmentUseCases } from "../../../services/api/usescases";
import { useSpinnerStore } from "../../../services/store";
import { toastify } from "../../../utils/toasts";
import "./style.css"

export const DepartmentsPage: React.FC = () => {
    const {formatMessage} = useIntl();
    const [departmentsList, setDepartmentsList] = useState<Department[] | null>(null)
    const [departmentDetailed, setDepartmentDetailed] = useState<Department | null>(null)
    const {showSpinner, hideSpinner} = useSpinnerStore();
    const {departmentService} = useApiServices();
    const {getDepartments} = useDepartmentUseCases(departmentService)
    const currentOrg: StaffOrganisationContent = localStorage.getItem('currentOrg') ? JSON.parse(localStorage.getItem('currentOrg')!) : null;
    
    useEffect(() => {
        getAllDepartments()

    }, [])

    const getAllDepartments = async () => {
        try{
            if(currentOrg){
                showSpinner()
                await getDepartments(currentOrg.organisation.organisationId, 0, 10).then(response => {
                    const data = response.content.data
                    setDepartmentsList(data)
                    setDepartmentDetailed(data[0])
                    hideSpinner()
                })
            }
        }
        catch(error: any){
            hideSpinner()
            toastify('error', error.message)
        }
    }

    const showDepartmentDetail = (d: Department) => {
        setDepartmentDetailed(d)
    }

    return <>
    <div className=' w-full md:w-[900px] lg:w-[76%] h-full flex flex-col justify-start items-start gap-5 px-10 py-5 bg-white lg:overflow-hidden'>
        <div className="flex justify-between w-full">
        <div className="flex gap-2">
            <FontAwesomeIcon icon={faFolder} className="text-secondary text-t7" />
            <h1 className="text-t6 font-heading font-bold">
                {formatMessage({id:"departments"})}
            </h1>
        </div>

        <div className="self-end">
            <DefaultButton 
                type={"secondary"} 
                text={formatMessage({id:"add"})}
                icon={faPlus} 
                bgWhite={false}
                typeForm="button"
                textSize={14}
                height={42}
                width={134}
                radius="md"
                className="hover:bg-secondary-400 transition ease-in-out duration-300"
            />
        </div>
        </div>
        
        <div className="dep-container flex flex-col lg:flex-row items-start gap-3 w-full border border-zinc-300 rounded-md shadow-md p-3">
            <div className="flex flex-col gap-4 overflow-scroll no-scrollbar h-full w-1/2">
                { departmentsList ? 
                departmentsList?.map((dep, index) => <DepartmentCard onClick={() => showDepartmentDetail(dep)} key={index} departement={dep}/>)
                :
                formatMessage({id:"no_departments"})
                }
            </div>
            <div className="flex flex-col border border-zinc-300 p-3 overflow-y-scroll w-1/2 h-full rounded-sm">
                <h1 className="text-t7 font-heading font-bold text-neutral-500 self-center mb-5">
                    {formatMessage({id:"department_title"})}: {departmentDetailed?.libelle}
                </h1>
                <div className="w-full h-full flex flex-col items-baseline justify-between ">
                    <div className="max-h-[400px] overflow-scroll no-scrollbar">
                        <p className="font-heading font-bold text-t5 text-neutral-500 mb-3">
                            Description: <span className="font-normal">Giovani Tsague</span>
                        </p>
                        <p className="font-heading font-bold text-t5 text-neutral-500 mb-3">
                        {formatMessage({id:"head_department"})} <span className="font-normal">Giovani Tsague</span>
                        </p>
                        <div className="font-heading font-bold text-t5 text-neutral-500 mb-3 w-full ">
                        {formatMessage({id:"employees"})}:
                            <div className="flex items-center gap-3 ml-7 mt-3">
                                <img src={avatars.avatarLandingPage} alt="" className="w-12" />
                                <p className="font-bold text-black text-t3">Stéphane Zang,
                                    <span className="font-normal"> Ingénieur DevOps<br />
                                    stephane.zang@abyster.com
                                    </span>
                                </p>
                            </div>

                            <div className="flex items-center gap-3 ml-7 mt-3">
                                <img src={avatars.avatarLandingPage} alt="" className="w-12" />
                                <p className="font-bold text-black text-t3">Stéphane Zang,
                                    <span className="font-normal"> Ingénieur DevOps<br />
                                    stephane.zang@abyster.com
                                    </span>
                                </p>
                            </div>

                            <div className="flex items-center gap-3 ml-7 mt-3">
                                <img src={avatars.avatarLandingPage} alt="" className="w-12" />
                                <p className="font-bold text-black text-t3">Stéphane Zang,
                                    <span className="font-normal"> Ingénieur DevOps<br />
                                    stephane.zang@abyster.com
                                    </span>
                                </p>
                            </div>
                        </div>

                        <p className="font-heading font-bold text-t5 text-neutral-500 mb-3">
                            {formatMessage({id:"created_at"})}: <span className="font-normal">12 Jan 2020</span>
                        </p>
                    </div>

                    <div className="w-full flex justify-end gap-2 ">
                        <DefaultButton 
                            type={"primary"} 
                            text={formatMessage({id:"add_or_remove_staff"})}
                            icon={faUserPlus} 
                            bgWhite={false}
                            typeForm="button"
                            textSize={16}
                            height={42}
                            width={256}
                            radius="md"
                            className="hover:bg-primary-550 transition ease-in-out duration-300"
                        />
                        <DefaultButton 
                            type={"secondary"} 
                            text={formatMessage({id:"edit"})}
                            icon={faPencil} 
                            bgWhite={false}
                            typeForm="button"
                            textSize={16}
                            height={42}
                            width={134}
                            radius="md"
                            className="hover:bg-secondary-400 transition ease-in-out duration-300"
                        />
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>
}