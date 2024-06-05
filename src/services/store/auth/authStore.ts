import { create } from "zustand";
import { AuthStore } from "../../../utils/interfaces/type/store";
import { AuthResponse } from "../../api/DTO/response";


export const useAuthStore = create<AuthStore>((set) =>({
    isLogged : localStorage.getItem("isLogged") === "1",
    signIn : async (authResponse: AuthResponse)  =>{
        localStorage.setItem("isLogged", "1");
        localStorage.setItem("token", authResponse.accessToken);
        localStorage.setItem("refresh", authResponse.refreshToken);
        localStorage.setItem("user", JSON.stringify(authResponse.user))
        set({isLogged: true});
        return true;
    },
    signOut: async ()  =>{
        localStorage.setItem("isLogged", "0");
        set({isLogged: false});
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