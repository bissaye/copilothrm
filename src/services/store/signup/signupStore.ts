import { create } from "zustand";
import { InvitationSignupStore, SignupStore } from "../../../utils/interfaces/type";
import { InvitedUserSignupDatas, UserSignupData } from "../../../utils/interfaces/DTO/request";

export const useSignupStore = create<SignupStore>((set) => ({
    signupStep: 1 as 1 | 2 | 3 | 4,
    setSignupStep: (step) => set({signupStep: step}),
    userData: {
        surname: "",
        firstname: "",
        birthplace: "",
        birthdate: "",
        userPhone: "",
        userCountry: "",
        userCity: "",
        userPostcode: "",
        userAddress: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: "",
        socialReason: "",
        siret: "",
        industry: "",
        orgAddress: "",
        orgCountry: "",
        orgCity: "",
        orgPostcode: "",
        orgLogo: null
    },
    setUserData: (values: UserSignupData) => set((state) => ({
        userData: {...state.userData, ...values}
    }))
}))

export const useInvitationSignupStore = create<InvitationSignupStore>((set) => ({
    invitedUserDatas: {
        surname: "",
        firstname: "",
        birthplace: "",
        birthdate: "",
        userPhone: "",
        userCountry: "",
        userCity: "",
        userPostcode: "",
        userAddress: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: ""
    },
    setInvitedUserDatas: (values: InvitedUserSignupDatas) => set((state) => ({
        invitedUserDatas: {...state.invitedUserDatas, ...values}
    }))
}))