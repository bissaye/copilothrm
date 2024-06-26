import { create } from "zustand";
import { AddOrgStore, InvitationStore } from "../../../utils/interfaces/type";
import { OrganizationData } from "../../api/DTO/request";
import { CountryData, IndustryData, TailleEntreprise } from "../../api/DTO/response";


export const useOrganisationStore = create<AddOrgStore>((set) => ({
    orgData: {
        pays: "",
        ville: "",
        raisonSociale: "",
        siret: "",
        industrie: "",
        organisationEmail: "",
        organisationPhone: "",
        nomDomaine: "",
        tailleEntreprise: "",
        organisationPays: "",
        organisationRue: "",
        organisationVille: "",
        trigram: "",
        organisationZipCode: "",
        cpassword: "",
        orgLogo: null
    },
    setOrgData: (values: OrganizationData) => set((state) => ({
        orgData: {
            ...state.orgData, 
            ...values
        }
    })),
    initCountryList: (countries: CountryData[]) => set({countryList: countries}),
    countryList: [],
    initIndustryList: (industries: IndustryData[]) => set({industryList: industries}),
    industryList: [],
    tailleEntrepriseList: [],
    initTailleEntrepriseList: (taillesEntreprise: TailleEntreprise[]) => set({tailleEntrepriseList: taillesEntreprise})
}))

export const useOrganisationInvitationsStore = create<InvitationStore>((set) => ({
    invitationList: null,
    invitationListUpdated: false,
    setInvitationList: (values) => set({invitationList: values}),
    setInvitationListUpdated: (value) => set({invitationListUpdated: value}),
}))