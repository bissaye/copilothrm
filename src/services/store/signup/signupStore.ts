import { create } from "zustand";
import { InvitationSignupStore, SignupStore } from "../../../utils/interfaces/type";
import { InvitedUserSignupDatas, UserSignupData } from "../../api/DTO/request";
import { CountryData, IndustryData, TailleEntreprise } from "../../api/DTO/response";

export const useSignupStore = create<SignupStore>((set) => ({
    signupStep: 1 as 1 | 2 | 3 | 4,
    setSignupStep: (step) => set({signupStep: step}),
    userData: {
        nom: "",
        prenom: "",
        lieuNais: "",
        dateNais: "",
        telephone: "",
        pays: "",
        ville: "",
        zipCode: "",
        rue: "",
        sexe: "",
        email: "",
        password: "",
        cpassword: "",
        raisonSociale: "",
        siret: "",
        industrie: "",
        nomDomaine: "",
        tailleEntreprise: "",
        organisationEmail: "",
        organisationPhone: "",
        organisationRue: "",
        organisationPays: "",
        organisationVille: "",
        organisationZipCode: "",
        trigram: "",
        orgLogo: null
    },
    setUserData: (values: UserSignupData) => set((state) => ({
        userData: {
            ...state.userData, 
            ...values
        }
    })),
    initCountryList: (countries: CountryData[]) => set({countryList: countries}),
    countryList: [],
    initIndustryList: (industries: IndustryData[]) => set({industryList: industries}),
    industryList: [],
    tailleEntrepriseList: [],
    initTailleEntrepriseList: (taillesEntreprise: TailleEntreprise[]) => set({tailleEntrepriseList: taillesEntreprise}),
    gender: [
        { 
            value: 'homme',
            text: 'man'
        },
        { 
            value: 'femme',
            text: 'woman'
        }]
}))

export const useInvitationSignupStore = create<InvitationSignupStore>((set) => ({
    invitedUserDatas: {
        nom: "",
        prenom: "",
        lieuNaissance: "",
        dateNaissance: "",
        mobilePhone: "",
        country: "",
        adresseVille: "",
        adresseZipCode: "",
        adresseRue: "",
        sexe: "",
        email: "",
        password: "",
    },
    setInvitedUserDatas: (values: InvitedUserSignupDatas) => set((state) => ({
        invitedUserDatas: {...state.invitedUserDatas, ...values}
    })),
    initCountryList: (countries: CountryData[]) => set({countryList: countries}),
    countryList: [],
    gender: [
        { 
            value: "",
            text: "select"
        },
        { 
            value: '0',
            text: 'man'
        },
        { 
            value: '1',
            text: 'woman'
        }]
}))