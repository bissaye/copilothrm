import { create } from "zustand";
import { SignupStore } from "../../../utils/interfaces/type";

export const useSignupStore = create<SignupStore>((set) => ({
    signupStep: 1 as 1 | 2 | 3 | 4,
    setSignupStep: (step) => set({signupStep: step})
}))