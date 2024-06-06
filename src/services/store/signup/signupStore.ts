import { create } from "zustand";
import { InvitationSignupStore, SignupStore } from "../../../utils/interfaces/type";
import { InvitedUserSignupDatas, UserSignupData } from "../../api/DTO/request";

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
        userPostcode: "",
        rue: "",
        sexe: "",
        email: "",
        password: "",
        confirmPassword: "",
        raisonSociale: "",
        siret: "",
        industrie: "",
        organisationEmail: "",
        organisationPhone: "",
        organisationRue: "",
        organisationPays: "",
        organisationVille: "",
        orgPostcode: "",
        orgLogo: null
    },
    setUserData: (values: UserSignupData) => set((state) => ({
        userData: {...state.userData, ...values}
    }))
}))

export const useInvitationSignupStore = create<InvitationSignupStore>((set) => ({
    invitedUserDatas: {
        nom: "",
        prenom: "",
        lieuNais: "",
        dateNais: "",
        telephone: "",
        pays: "",
        ville: "",
        userPostcode: "",
        rue: "",
        sexe: "",
        email: "",
        password: "",
        confirmPassword: ""
    },
    setInvitedUserDatas: (values: InvitedUserSignupDatas) => set((state) => ({
        invitedUserDatas: {...state.invitedUserDatas, ...values}
    }))
}))