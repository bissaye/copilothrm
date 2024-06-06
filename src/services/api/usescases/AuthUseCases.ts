import { UserAuthData, UserSignupData } from "../DTO/request";
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
      
      if(err.response.data.errorMessage) {
        const message = err.response.data.errorMessage;
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
      if(err.response.data.errorMessage) {
        const message = err.response.data.errorMessage;
        throw new Error(String(message))
      }
      throw new Error(err);
    }
  }

  return {
    login,
    register
  };
  
};
