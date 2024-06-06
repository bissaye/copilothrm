import { create } from "zustand";
import { AuthStore } from "../../../utils/interfaces/type/store";
import { UserAuthResponse } from "../../api/DTO/response";


export const useAuthStore = create<AuthStore>((set) =>({
    
    isLogged : localStorage.getItem("isLogged") === "1",
    
    // sign in
    signIn : async (authResponse: UserAuthResponse) => {
        localStorage.setItem("isLogged", "1");
        localStorage.setItem("token", authResponse.content.accessToken);
        localStorage.setItem("refresh", authResponse.content.refreshToken);
        localStorage.setItem("user", JSON.stringify(authResponse.content.user))
        set({isLogged: true});
        return true;
    },
    
    // sign out
    signOut: async ()  =>{
        localStorage.setItem("isLogged", "0");
        set({isLogged: false});
        return false
    },
    
    // init auth
    initAuth: (): void => {
        const isLoggedStr = localStorage.getItem("isLogged");
        // console.log("init")
        if(!isLoggedStr){
            localStorage.setItem("isLogged", "0");
        }
    }
}));