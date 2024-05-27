import { create } from "zustand";
import { AuthStore } from "../../../utils/interfaces/type/store";


export const useAuthStore = create<AuthStore>(() =>({
    isLogged : localStorage.getItem("isLogged") === "1",
    signIn : async ()  =>{
        localStorage.setItem("isLogged", "1");
        return true;
    },
    signOut: async ()  =>{
        localStorage.setItem("isLogged", "0");
        return false
    },
    initAuth: (): void => {
        const isLoggedStr = localStorage.getItem("isLogged");
        console.log("init")
        if(!isLoggedStr){
            localStorage.setItem("isLogged", "0");
        }
    }
}));