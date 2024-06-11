import { InvitedUserSignupDatas, UserAuthData, UserSignupData } from "../DTO/request";
import { UserAuthResponse } from "../DTO/response";
import { IAuthServices } from "../services/interfaces";
import { useAuthStore } from "../../store";

export const useAuthUseCase = (authServices: IAuthServices | null) => {

  const { signIn } = useAuthStore();

  const login = async (data: UserAuthData) => {
    try {
      if (authServices) {
        const res: UserAuthResponse = await authServices.login(data);
        const logged: boolean = await signIn(res);
        if (!logged) {
          throw new Error(
            "erreur lors de l'initialisation des données utilisateur"
          );
        }
        
      } else {
        throw new Error("erreur authServices not set");
      }
    } catch (err: any) {
      // debugger
      if(err.response.data.message) {
        const message = err.response.data.message;
        throw new Error(String(message))
      }
      throw new Error(err);
    }
  };

  const register = async (data: UserSignupData) => {
    try {
      if(authServices){
        await authServices.register(data);
      } 
      else {
        throw new Error("erreur authServices not set");
      }
    }
    catch(err: any) {
      if(err.response.data.message) {
        const message = err.response.data.message;
        throw new Error(String(message))
      }
      throw new Error(err);
    }
  }

  const join = async (data: InvitedUserSignupDatas) => {
    try {
      if(authServices){
        await authServices.join(data);
      } 
      else {
        throw new Error("erreur authServices not set");
      }
    }
    catch(err: any) {
      if(err.response.data.message) {
        const message = err.response.data.message;
        throw new Error(String(message))
      }
      throw new Error(err);
    }
  }

  return {
    login,
    register,
    join
  };
  
};
