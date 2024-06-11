import { useIntl } from "react-intl";
import { FieldsInfo } from "../../../utils/interfaces/type";
import { DefaultButton, InputDate, InputSelect, InputText } from "../../components/ui";
import { useFormik } from "formik";
import { invitedUserSignupStepOneSchema } from "../../../services/forms/validations";
import { InvitedUserSignupDatas } from "../../../services/api/DTO/request";
import { useInvitationSignupStore } from "../../../services/store";
import { InputSelectOptions } from "../../../utils/interfaces/props";

interface Step1Props {
    handleSubmitNextStep: () => void;
}

export const Step1 : React.FC<Step1Props> = (props: Step1Props) => {

    const { handleSubmitNextStep } = props;
    const {formatMessage} = useIntl();
    const { invitedUserDatas, setInvitedUserDatas, gender, countryList } = useInvitationSignupStore();
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
            id : "mobilePhone",
            name : "mobilePhone",
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
        }
    }

    const genderOptions: InputSelectOptions[] = gender.map((obj) => {
        return {
            value: obj.value,
            text: formatMessage({id: obj.text})
        }
    })

    const countryOptions: InputSelectOptions[] = countryList.map((country) => {
        return {
            value: country.countryId,
            text: country.libelle 
        }
    });

    const initialValues: any = {}
    Object.entries(fields).map(([_, field]) => {
        initialValues[field.name] = invitedUserDatas[field.name as keyof InvitedUserSignupDatas];
        return field
    })

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: invitedUserSignupStepOneSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: (values) => {
            const body: InvitedUserSignupDatas = {...values};
            setInvitedUserDatas(body);
            handleSubmitNextStep();
        }
    })
    const {values, errors, handleChange, handleSubmit} = formik

    return (
        <form 
            className="flex flex-col gap-7 items-center w-full"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-36 mb-8 w-full ">
                
                {/* colonne de gauche */}
                <div className="w-full md:w-[422px] flex flex-col gap-4 ">
                    {/* Nom de famille */}
                    <div>
                        <InputText
                            id = {fields.nom.id}    
                            name =  {fields.nom.name}  
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
                            label={formatMessage({id:"firstname"})}
                            placeholder = {formatMessage({id: "enter_your_firstname"})} 
                            value={values[fields.prenom.name]} 
                            onChange={handleChange}
                            errorMessage={ errors.prenom ? errors.prenom.toString() : undefined}
                        />
                    </div>
                    {/* Date de naissance */}
                    <div>
                        <InputDate
                            id = {fields.dateNaissance.id}    
                            name = {fields.dateNaissance.name}  
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
                            label={formatMessage({id:"birth_place"})}
                            placeholder = {formatMessage({id: "your_place_of_birth"})} 
                            value={values[fields.lieuNaissance.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.lieuNaissance ? errors.lieuNaissance.toString() : undefined}
                        />
                    </div>
                    {/* Sexe */}
                    <div>
                        <InputSelect
                            id = {fields.sexe.id}    
                            name =  {fields.sexe.name}  
                            label={formatMessage({id:"gender"})}
                            value={values[fields.sexe.name]} 
                            onChange={handleChange}
                            options={genderOptions}      
                            errorMessage={ errors.sexe ? errors.sexe.toString() : undefined}
                        />
                    </div>
                    
                </div>

                {/* colonne de droite */}
                <div className="w-full md:w-[422px] flex flex-col gap-4 ">
                    {/* Téléphone */}
                    <div>
                        <InputText
                            id = {fields.mobilePhone.id}    
                            name =  {fields.mobilePhone.name}  
                            label={formatMessage({id:"phone"})}
                            placeholder = {formatMessage({id: "enter_your_phone"})} 
                            value={values[fields.mobilePhone.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.mobilePhone ? errors.mobilePhone.toString() : undefined}
                        />
                    </div>
                    {/* Pays */}
                    <div>
                        <InputSelect
                            id = {fields.country.id}    
                            name =  {fields.country.name}  
                            options={countryOptions}
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
                            label={formatMessage({id:"address"})}
                            placeholder = {formatMessage({id: "enter_your_address"})} 
                            value={values[fields.adresseRue.name]} 
                            onChange={handleChange}
                            errorMessage={ errors.adresseRue ? errors.adresseRue.toString() : undefined}
                        />
                    </div>
                    
                </div>
                
            </div>
            <DefaultButton
                type = "primary"
                text = {formatMessage({id: "next"})}
                bgWhite = {false}
                typeForm='submit'
                marginY={20}
                width={335}
                disabled={!formik.isValid}
                className="rounded-[4px] disabled:bg-primary/70"
            />
            
        </form>
    )
}

