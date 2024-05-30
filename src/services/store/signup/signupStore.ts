import { create } from "zustand";
import { SignupStore } from "../../../utils/interfaces/type";
import { UserSignupData } from "../../../utils/interfaces/DTO/request";

export const useSignupStore = create<SignupStore>((set) => ({
    signupStep: 1 as 1 | 2 | 3 | 4,
    setSignupStep: (step) => set({signupStep: step}),
    userData: {
        surname: "",
        firstname: "",
        birthplace: "",
        birthdate: new Date(),
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