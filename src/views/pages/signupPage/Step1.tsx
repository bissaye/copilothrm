import { useIntl } from "react-intl";
import { FieldsInfo } from "../../../utils/interfaces/type";
import { DefaultButton, InputDate, InputSelect, InputText } from "../../components/ui";
import { useFormik } from "formik";
import { userSignUpStepOneSchema } from "../../../services/forms/validations";
import { UserSignupData } from "../../../services/api/DTO/request";
import { useSignupStore } from "../../../services/store";
import { InputSelectOptions } from "../../../utils/interfaces/props";

interface Step1Props {
    handleSubmitNextStep: () => void;
}

export const Step1 : React.FC<Step1Props> = (props: Step1Props) => {

    const { handleSubmitNextStep } = props;
    const {formatMessage} = useIntl();
    const { userData, setUserData, countryList, gender } = useSignupStore();
    const fields : Record<string, FieldsInfo> = {
        nom :{
            id : "nom",
            name : "nom",
        },
        prenom :{
            id : "prenom",
            name : "prenom",
        },
        lieuNais :{
            id : "lieuNais",
            name : "lieuNais",
        },
        dateNais :{
            id : "dateNais",
            name : "dateNais",
        },
        telephone :{
            id : "telephone",
            name : "telephone",
        },
        pays :{
            id : "pays",
            name : "pays",
        },
        ville :{
            id : "ville",
            name : "ville",
        },
        zipCode :{
            id : "zipCode",
            name : "zipCode",
        },
        rue :{
            id : "rue",
            name : "rue",
        },
        sexe :{
            id : "sexe",
            name : "sexe",
        }
    }

    const genderOptions = gender.map((obj) => {
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
                            id = {fields.dateNais.id}    
                            name = {fields.dateNais.name}  
                            label={formatMessage({id:"birthdate"})}
                            value={values[fields.dateNais.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.dateNais ? errors.dateNais.toString() : undefined}
                        />
                    </div>
                    {/* Lieu de naissance */}
                    <div>
                        <InputText
                            id = {fields.lieuNais.id}    
                            name = {fields.lieuNais.name}  
                            label={formatMessage({id:"birth_place"})}
                            placeholder = {formatMessage({id: "your_place_of_birth"})} 
                            value={values[fields.lieuNais.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.lieuNais ? errors.lieuNais.toString() : undefined}
                        />
                    </div>
                    {/* Sexe */}
                    <div>
                        <InputSelect
                            id = {fields.sexe.id}    
                            name =  {fields.sexe.name}  
                            label={formatMessage({id:"gender"})}
                            placeholder={formatMessage({id:"select"})}
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
                            id = {fields.telephone.id}    
                            name =  {fields.telephone.name}  
                            label={formatMessage({id:"phone"})}
                            placeholder = {formatMessage({id: "enter_your_phone"})} 
                            value={values[fields.telephone.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.telephone ? errors.telephone.toString() : undefined}
                        />
                    </div>
                    {/* Pays */}
                    <div>
                        <InputSelect
                            id = {fields.pays.id}    
                            name =  {fields.pays.name}  
                            options={countryOptions}
                            label={formatMessage({id:"country"})}
                            placeholder = {formatMessage({id: "enter_your_country"})} 
                            value={values[fields.pays.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.pays ? errors.pays.toString() : undefined}
                        />
                    </div>
                    {/* Ville */}
                    <div>
                        <InputText
                            id = {fields.ville.id}    
                            name =  {fields.ville.name}  
                            label={formatMessage({id:"city"})}
                            placeholder = {formatMessage({id: "enter_your_city"})} 
                            value={values[fields.ville.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.ville ? errors.ville.toString() : undefined}
                        />
                    </div>
                    {/* Code postal */}
                    <div>
                        <InputText
                            id = {fields.zipCode.id}    
                            name =  {fields.zipCode.name}  
                            label={formatMessage({id:"post_code"})}
                            placeholder = {formatMessage({id: "enter_your_post_code"})} 
                            value={values[fields.zipCode.name]} 
                            onChange={handleChange}      
                            errorMessage={ errors.zipCode ? errors.zipCode.toString() : undefined}
                        />
                    </div>
                    {/* Adresse postale */}
                    <div>
                        <InputText
                            id = {fields.rue.id}    
                            name =  {fields.rue.name}  
                            label={formatMessage({id:"address"})}
                            placeholder = {formatMessage({id: "enter_your_address"})} 
                            value={values[fields.rue.name]} 
                            onChange={handleChange}
                            errorMessage={ errors.rue ? errors.rue.toString() : undefined}
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

