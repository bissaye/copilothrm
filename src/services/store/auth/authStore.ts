import { create } from "zustand";
import { AuthStore } from "../../../utils/interfaces/type/store";


export const useAuthStore = create<AuthStore>((set) =>({
    isLogged : false,
    signIn : (): void =>{
        localStorage.setItem("isLogged", "1");
        set({isLogged: true})
    },
    signOut: (): void =>{
        localStorage.removeItem("isLogged");
        set({isLogged: false})
    },
    initAuth: (): void => {
        const isLoggedStr = localStorage.getItem("isLogged") ?? "0";
        set({
            isLogged : isLoggedStr === "1" ? true : false
        })
    }
}));