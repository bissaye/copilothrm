import { useIntl } from "react-intl";
import { FieldsInfo } from "../../../utils/interfaces/type";
import { DefaultButton, InputFile, InputSelect, InputText } from "../../components/ui";
import { useFormik } from "formik";
import { OrganizationData } from "../../../services/api/DTO/request";
import { useOrganisationStore } from "../../../services/store";
import { userSignUpStepThreeSchema } from "../../../services/forms/validations";
import { InputSelectOptions } from "../../../utils/interfaces/props";

interface Step1Props {
    handleSubmitNextStep: () => void;
}

export const Step1 : React.FC<Step1Props> = (props: Step1Props) => {
    
    // props
    const { handleSubmitNextStep } = props;
    
    // hooks
    const {formatMessage} = useIntl();
    const { orgData, setOrgData, countryList, industryList, tailleEntrepriseList } = useOrganisationStore();

    // constantes
    const fields : Record<string, FieldsInfo> = {
        pays :{
            id : "pays",
            name : "pays",
        },
        ville :{
            id : "ville",
            name : "ville",
        },
        raisonSociale :{
            id : "raisonSociale",
            name : "raisonSociale",
        },
        siret: {
            id: "siret",
            name: "siret"
        },
        industrie: {
            id: "industrie",
            name: "industrie"
        },
        nomDomaine:{
            id: "nomDomaine",
            name: "nomDomaine"
        },
        tailleEntreprise:{
            id: "tailleEntreprise",
            name: "tailleEntreprise"
        },
        organisationEmail: {
            id: "organisationEmail",
            name: "organisationEmail"
        },
        organisationPhone: {
            id: "organisationPhone",
            name: "organisationPhone"
        },
        organisationRue: {
            id: "organisationRue",
            name: "organisationRue"
        },
        organisationPays :{
            id : "organisationPays",
            name : "organisationPays",
        },
        organisationVille: {
            id: "organisationVille",
            name: "organisationVille"
        },
        organisationZipCode: {
            id: "organisationZipCode",
            name: "organisationZipCode"
        },
        orgLogo: {
            id: "orgLogo",
            name: "orgLogo"
        },
        trigram: {
            id: "trigram",
            name: "trigram"
        }
    }

    const countryOptions: InputSelectOptions[] = countryList.map((country) => {
        return {
            value: country.countryId,
            text: country.libelle 
        }
    });

    const industrieOptions: InputSelectOptions[] = industryList.map((industry) => {
        return {
            value: industry.id,
            text: industry.libelle 
        }
    })

    const tailleEntrepriseOptions: InputSelectOptions[] = tailleEntrepriseList.map((tailleEntreprise) => {
        return {
            value: tailleEntreprise.tailleEntrepriseId,
            text: tailleEntreprise.libelle 
        }
    })

    const initialValues: any = {}
    Object.entries(fields).map(([_, field]) => {
        initialValues[field.name] = orgData[field.name as keyof OrganizationData];
        return field
    })

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: userSignUpStepThreeSchema,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: async (values) => {
            const body: OrganizationData = {...values};
            setOrgData(body);
            handleSubmitNextStep();
        }
    })
    const {values, errors, handleChange, handleSubmit} = formik


    return(
        <form 
            className="flex flex-col items-center w-full"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col md:flex-row justify-center items-start gap-5 md:gap-36 mb-8 w-full">
                {/* colonne de gauche */}
                <div className="w-full md:w-[422px] flex flex-col gap-4 ">
                    {/* Raison sociale */}
                    <div>
                        <InputText
                            id = {fields.raisonSociale.id}    
                            name =  {fields.raisonSociale.name}  
                            label={formatMessage({id:"social_reason"})}
                            placeholder = {formatMessage({id: "enter_social_reason"})}
                            required
                            value={values[fields.raisonSociale.name]}
                            onChange={handleChange}
                            className="h-5"
                            errorMessage={ errors.raisonSociale ? errors.raisonSociale.toString() : undefined}
                        />
                    </div>
                    {/* SIRET */}
                    <div>
                        <InputText
                            id = {fields.siret.id}    
                            name =  {fields.siret.name}  
                            label={formatMessage({id:"siret"})}
                            placeholder = {formatMessage({id: "enter_siret_number"})}
                            required
                            value={values[fields.siret.name]} 
                            onChange={handleChange}
                            className="h-5"
                            errorMessage={ errors.siret ? errors.siret.toString() : undefined}
                        />
                    </div>
                    {/* TRIGRAM */}
                    <div>
                        <InputText
                            id = {fields.trigram.id}    
                            name =  {fields.trigram.name}  
                            label="Trigram"
                            placeholder = "Trigram"
                            required 
                            value={values[fields.trigram.name]} 
                            onChange={handleChange}
                            className="h-5"
                            errorMessage={ errors.trigram ? errors.trigram.toString() : undefined}
                        />
                    </div>
                    {/* Industrie */}
                    <div>
                        <InputSelect
                            id = {fields.industrie.id}    
                            name = {fields.industrie.name}  
                            label={formatMessage({id:"industry"})}
                            placeholder = {formatMessage({id: "choose_industry"})}
                            required
                            value={values[fields.industrie.name]} 
                            onChange={handleChange}
                            options={industrieOptions}
                            className="h-5"
                            errorMessage={ errors.industrie ? errors.industrie.toString() : undefined}
                        />
                    </div>
                    {/* Taille de l'entreprise */}
                    <div>
                        <InputSelect
                            id = {fields.tailleEntreprise.id}    
                            name = {fields.tailleEntreprise.name}  
                            label={formatMessage({id:"org_size"})}
                            placeholder = {formatMessage({id: "choose_org_size"})}
                            value={values[fields.tailleEntreprise.name]} 
                            onChange={handleChange}
                            options={tailleEntrepriseOptions}
                            className="h-5"
                            errorMessage={ errors.tailleEntreprise ? errors.tailleEntreprise.toString() : undefined}
                        />
                    </div>
                    {/* Email de l'organisation */}
                    <div>
                        <InputText
                            id = {fields.organisationEmail.id}    
                            name =  {fields.organisationEmail.name}  
                            label='Email'
                            placeholder = {formatMessage({id: "enter_social_reason"})}
                            required
                            value={values[fields.organisationEmail.name]}
                            onChange={handleChange}
                            className="h-5"
                            errorMessage={ errors.organisationEmail ? errors.organisationEmail.toString() : undefined}
                        />
                    </div>
                    {/* Nom de domaine de l'organisation */}
                    <div>
                        <InputText
                            id = {fields.nomDomaine.id}    
                            name =  {fields.nomDomaine.name}  
                            label={formatMessage({id:"domain_name"})}
                            placeholder = {formatMessage({id: "enter_domain_name"})} 
                            value={values[fields.nomDomaine.name]}
                            onChange={handleChange}
                            className="h-5"
                            errorMessage={ errors.nomDomaine ? errors.nomDomaine.toString() : undefined}
                        />
                    </div>
                </div>

                {/* colonne de droite */}
                <div className="w-full md:w-[422px] flex flex-col gap-4 ">
                    
                    {/* Pays de l'organisation */}
                    <div>
                        <InputSelect
                            id = {fields.organisationPays.id}    
                            name =  {fields.organisationPays.name}  
                            label={formatMessage({id:"country"})}
                            placeholder = {formatMessage({id: "country_of_organization"})}
                            required 
                            value={values[fields.organisationPays.name]}
                            onChange={handleChange}
                            options={countryOptions}
                            className="h-5"
                            errorMessage={ errors.organisationPays ? errors.organisationPays.toString() : undefined}
                        />
                    </div>
                    {/* Ville de l'organisation */}
                    <div>
                        <InputText
                            id = {fields.organisationVille.id}    
                            name =  {fields.organisationVille.name}  
                            label={formatMessage({id:"city"})}
                            placeholder = {formatMessage({id: "city_of_organization"})}
                            required
                            value={values[fields.organisationVille.name]} 
                            onChange={handleChange}
                            className="h-5"
                            errorMessage={ errors.organisationVille ? errors.organisationVille.toString() : undefined}
                        />
                    </div>
                    {/* Code postal de l'organisation */}
                    <div>
                        <InputText
                            id = {fields.organisationZipCode.id}    
                            name = {fields.organisationZipCode.name}  
                            label={formatMessage({id:"post_code"})}
                            placeholder = {formatMessage({id: "post_code_of_organization"})}
                            required 
                            value={values[fields.organisationZipCode.name]} 
                            onChange={handleChange}    
                            className="h-5"  
                            errorMessage={ errors.organisationZipCode ? errors.organisationZipCode.toString() : undefined}
                        />
                    </div>
                    {/* Adresse postale */}
                    <div>
                        <InputText
                            id = {fields.organisationRue.id}    
                            name = {fields.organisationRue.name}  
                            label={formatMessage({id:"enter_your_address"})}
                            placeholder={formatMessage({id:"address_of_organization"})}
                            required
                            value={values[fields.organisationRue.name]} 
                            onChange={handleChange}   
                            className="h-5"   
                            errorMessage={ errors.organisationRue ? errors.organisationRue.toString() : undefined}
                        />
                    </div>
                    {/* Téléphone de l'organisation */}
                    <div>
                        <InputText
                            id = {fields.organisationPhone.id}    
                            name =  {fields.organisationPhone.name}  
                            label={formatMessage({id:"phone"})}
                            placeholder = {formatMessage({id: "enter_your_phone"})}
                            required
                            value={values[fields.organisationPhone.name]} 
                            onChange={handleChange}   
                            className="h-5"   
                            errorMessage={ errors.organisationPhone ? errors.organisationPhone.toString() : undefined}
                        />
                    </div>
                    {/* Logo de l'organisation */}
                    <div>
                        <InputFile
                            id = {fields.orgLogo.id}    
                            name = {fields.orgLogo.name}  
                            label='Logo'
                            placeholder={formatMessage({id:"organization_logo"})}
                            value={values[fields.orgLogo.name]} 
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    formik.setFieldValue(fields.orgLogo.name, e.target.files[0].name)
                                }
                            }}      
                            className="h-5"
                            fileType=".jpg, .jpeg, .png"
                            errorMessage={ errors.orgLogo ? errors.orgLogo.toString() : undefined}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
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
            </div>
        </form>
    )
}