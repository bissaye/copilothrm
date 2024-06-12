import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { avatars } from "../../../assets/images"
import { faEnvelope, faPenToSquare, faUser } from "@fortawesome/free-regular-svg-icons"
import { faAt, faLocationDot, faPencil, faUserPen } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone"
import { useIntl } from "react-intl"
import { DefaultButton, InputDate, InputSelect, InputText, LinkButton } from "../../components/ui"
import { FieldsInfo } from "../../../utils/interfaces/type"
import { useSignupStore } from "../../../services/store"
import { useFormik } from "formik"
import { userSignUpStepOneSchema } from "../../../services/forms/validations"
import { UserSignupData } from "../../../services/api/DTO/request"
import { ChangePasswordModal } from "../../components/common"
import { useState } from "react"
import { UserData } from "../../../services/api/DTO/response"

export const UserProfilePage: React.FC = () => {

    //hooks
    const {formatMessage} = useIntl();
    const { userData, setUserData, gender } = useSignupStore();
    const [modalVisible, setModalVisible] = useState(false);

    //constantes
    const user: UserData = JSON.parse(localStorage.getItem("user")!)
    
    const loggedUser = user.staff;
    
    const fields : Record<string, FieldsInfo> = {
        nom :{
            id : "nom",
            name : "nom",
        },
        prenom :{
            id : "prenom",
            name : "prenom",
        },
        lieuNaissance :{
            id : "lieuNaissance",
            name : "lieuNaissance",
        },
        dateNaissance :{
            id : "dateNaissance",
            name : "dateNaissance",
        },
        mobilePhone :{
            id : "telephone",
            name : "telephone",
        },
        country :{
            id : "country",
            name : "country",
        },
        adresseVille :{
            id : "adresseVille",
            name : "adresseVille",
        },
        adresseZipCode :{
            id : "adresseZipCode",
            name : "adresseZipCode",
        },
        adresseRue :{
            id : "adresseRue",
            name : "adresseRue",
        },
        sexe :{
            id : "sexe",
            name : "sexe",
        },
        familyContactPhone: {
            id: "familyContactPhone",
            name: "familyContactPhone"
        },
        familyContactQuality: {
            id: "familyContactQuality",
            name: "familyContactQuality"
        }
    }

    const genderOptions = gender.map((obj) => {
        return {
            value: obj.value,
            text: formatMessage({id: obj.text})
        }
    })

    const initialValues: any = {}
    Object.entries(fields).map(([_, field]) => {
        initialValues[field.name] = userData[field.name as keyof UserSignupData];
        return field
    })

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: userSignUpStepOneSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: async (values) => {
            const body: UserSignupData = {...values};
            setUserData(body);
        }
    })
    const {values, errors, handleChange, handleSubmit} = formik

    return(
        <div className="w-full md:w-[1100px] flex gap-5 ">
            <div className="w-[20%] lg:w-[250px] border border-gray-500 shadow-md rounded-md">
                <div className="flex flex-col justify-between items-center p-5 gap-4 h-full ">
                    {/* user personal infos */}
                    <div className="w-full flex flex-col justify-center items-center">
                        {/* user profile picture */}
                        <img src={avatars.avatarLandingPage} className='h-32 w-32 rounded-full mb-4'/>
                        
                        <div className="flex flex-col justify-center items-start w-full">
                            <span className="flex gap-3 justify-center items-center">
                                <FontAwesomeIcon icon={faUser} />
                                <h1 className="font-heading font-bold text-t6">{loggedUser.prenom} {loggedUser.nom}</h1>
                            </span>
                            <p className="text-neutral-600 font-body text-t3 ml-7">Responsable RH</p>
                            <p className="text-neutral-500 font-body text-t2 ml-7">Abyster Consulting</p>
                            <hr className="my-3 bg-neutral-400 w-full h-[1.5px]" />
                            <div className="flex flex-col gap-1 justify-start items-start">
                                <span className="flex gap-3 justify-center items-center">
                                    <FontAwesomeIcon icon={faAt} className="text-neutral-600" />
                                    <p className="text-neutral-600 font-body text-t3">{loggedUser.user.username}</p>
                                </span>
                                <span className="flex gap-3 justify-center items-center">
                                    <FontAwesomeIcon icon={faPhone} className="text-neutral-600" />
                                    <p className="text-neutral-600 font-body text-t3">(237) 6 93 42 71 80</p>
                                </span>
                                <span className="flex gap-3 justify-center items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-neutral-600" />
                                    <p className="text-neutral-600 font-body text-t3">172 Rue Saint Louis </p>
                                </span>
                                <span className="flex gap-3 justify-center items-center">
                                    <FontAwesomeIcon icon={faLocationDot} className="text-neutral-600" />
                                    <p className="text-neutral-600 font-body text-t3">Carrières, Poissy</p>
                                </span>
                            </div>
                        </div>
                    
                    </div>
                    
                    <div className="w-full flex flex-col justify-center items-center">
                        <hr className="my-3 bg-neutral-400 w-full h-[1.5px]" />
                        <DefaultButton
                            text={formatMessage({ id: "change_my_password" })}
                            type='primary'
                            bgWhite={true}
                            textSize={14}
                            className=' text-t1 hover:text-primary-600 border-0'
                            icon={faPenToSquare}
                            onClick={() => setModalVisible(true)}                    
                        />
                    </div>
                </div>
            </div>


            <div className="w-[70%] lg:w-[1000px] border border-gray-500 shadow-md rounded-md overflow-y-scroll p-5">
                <span className="flex gap-3 justify-start items-center mb-5">
                    <FontAwesomeIcon icon={faUserPen} className="text-secondary" />
                    <h1 className="font-heading font-bold text-t6">{formatMessage({ id: "edit_my_profile" })}</h1>
                </span>
                <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-between"
                >
                    <div className="">
                        <div className="flex justify-around w-full">
                            <div className="flex flex-col justify-center items-center w-1/2">
                                {/* user profile picture */}
                                <div className="relative">
                                    <img src={avatars.avatarLandingPage} className='h-40 w-40 rounded-full mb-4'/>
                                    <span className="absolute right-0 bottom-5 rounded-full border border-gray-400 bg-white h-9 w-9 flex justify-center items-center">
                                        <LinkButton
                                            text=""
                                            textSize={11.5}
                                            className='text-neutral-500 text-t1 hover:text-neutral-600 border-0 h-full w-full'
                                            icon={faPencil}                   
                                        />
                                    </span>
                                </div>
                                <p className="text-neutral-600 font-body text-t3">{loggedUser.user.username}</p>
                            </div>
                            <div className="w-1/2 py-5 px-5 flex flex-col gap-3 ">
                                {/* Nom de famille */}
                                <div>
                                    <InputText
                                        id = {fields.nom.id}    
                                        name =  {fields.nom.name}
                                        className="h-5"
                                        label={formatMessage({id:"surname"})}
                                        placeholder = {formatMessage({id: "enter_your_surname"})} 
                                        value={values[fields.nom.name]}
                                        onChange={handleChange}
                                        errorMessage={ errors.nom ? errors.nom.toString() : undefined}
                                    />
                                </div>
                                {/* Prénom */}
                                <div>
                                    <InputText
                                        id = {fields.prenom.id}    
                                        name =  {fields.prenom.name}
                                        className="h-5"
                                        label={formatMessage({id:"firstname"})}
                                        placeholder = {formatMessage({id: "enter_your_firstname"})} 
                                        value={values[fields.prenom.name]} 
                                        onChange={handleChange}
                                        errorMessage={ errors.prenom ? errors.prenom.toString() : undefined}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row W-full">
                            {/* colonne de gauche */}
                            <div className="flex flex-col gap-3 w-1/2 px-5 ">
                                {/* Sexe */}
                                <div>
                                    <InputSelect
                                        id = {fields.sexe.id}    
                                        name =  {fields.sexe.name}  
                                        className="h-5"
                                        label={formatMessage({id:"gender"})}
                                        value={values[fields.sexe.name]} 
                                        onChange={handleChange}
                                        options={genderOptions}      
                                        errorMessage={ errors.sexe ? errors.sexe.toString() : undefined}
                                    />
                                </div>
                                {/* Date de naissance */}
                                <div>
                                    <InputDate
                                        id = {fields.dateNaissance.id}    
                                        name = {fields.dateNaissance.name}
                                        className="h-5"
                                        label={formatMessage({id:"birthdate"})}
                                        value={values[fields.dateNaissance.name]} 
                                        onChange={handleChange}      
                                        errorMessage={ errors.dateNaissance ? errors.dateNaissance.toString() : undefined}
                                    />
                                </div>
                                {/* Lieu de naissance */}
                                <div>
                                    <InputText
                                        id = {fields.lieuNaissance.id}    
                                        name = {fields.lieuNaissance.name}
                                        className="h-5" 
                                        label={formatMessage({id:"birth_place"})}
                                        placeholder = {formatMessage({id: "your_place_of_birth"})} 
                                        value={values[fields.lieuNaissance.name]} 
                                        onChange={handleChange}      
                                        errorMessage={ errors.lieuNaissance ? errors.lieuNaissance.toString() : undefined}
                                    />
                                </div>
                                {/* Téléphone */}
                                <div>
                                    <InputText
                                        id = {fields.mobilePhone.id}    
                                        name =  {fields.mobilePhone.name}
                                        className="h-5"
                                        label={formatMessage({id:"phone"})}
                                        placeholder = {formatMessage({id: "enter_your_phone"})} 
                                        value={values[fields.mobilePhone.name]} 
                                        onChange={handleChange}      
                                        errorMessage={ errors.mobilePhone ? errors.mobilePhone.toString() : undefined}
                                    />
                                </div>
                            </div>

                            {/* colonne de droite */}
                            <div className="flex flex-col gap-3 w-1/2 px-5 ">
                                {/* Pays */}
                                <div>
                                    <InputText
                                        id = {fields.country.id}    
                                        name =  {fields.country.name}
                                        className="h-5"
                                        label={formatMessage({id:"country"})}
                                        placeholder = {formatMessage({id: "enter_your_country"})} 
                                        value={values[fields.country.name]} 
                                        onChange={handleChange}      
                                        errorMessage={ errors.country ? errors.country.toString() : undefined}
                                    />
                                </div>
                                {/* Ville */}
                                <div>
                                    <InputText
                                        id = {fields.adresseVille.id}    
                                        name =  {fields.adresseVille.name}  
                                        className="h-5"
                                        label={formatMessage({id:"city"})}
                                        placeholder = {formatMessage({id: "enter_your_city"})} 
                                        value={values[fields.adresseVille.name]} 
                                        onChange={handleChange}      
                                        errorMessage={ errors.adresseVille ? errors.adresseVille.toString() : undefined}
                                    />
                                </div>
                                {/* Code postal */}
                                <div>
                                    <InputText
                                        id = {fields.adresseZipCode.id}    
                                        name =  {fields.adresseZipCode.name}  
                                        className="h-5"
                                        label={formatMessage({id:"post_code"})}
                                        placeholder = {formatMessage({id: "enter_your_post_code"})} 
                                        value={values[fields.adresseZipCode.name]} 
                                        onChange={handleChange}      
                                        errorMessage={ errors.adresseZipCode ? errors.adresseZipCode.toString() : undefined}
                                    />
                                </div>
                                {/* Adresse postale */}
                                <div>
                                    <InputText
                                        id = {fields.adresseRue.id}    
                                        name =  {fields.adresseRue.name}  
                                        className="h-5"
                                        label={formatMessage({id:"address"})}
                                        placeholder = {formatMessage({id: "enter_your_address"})} 
                                        value={values[fields.adresseRue.name]} 
                                        onChange={handleChange}
                                        errorMessage={ errors.adresseRue ? errors.adresseRue.toString() : undefined}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <DefaultButton 
                        type={"primary"} 
                        text={formatMessage({id: "save"})}
                        typeForm="submit"
                        width={150}
                        className="self-center justify-self-end mt-12"
                        bgWhite={false}
                        radius='md' 
                        />
                </form>
            </div>
           {modalVisible &&  <ChangePasswordModal onClose={() => setModalVisible(false)} />}
        </div>
    )
}