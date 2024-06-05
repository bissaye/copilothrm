import { UserAuthData } from "../DTO/request";
import { AuthResponse } from "../DTO/response";
import { IAuthServices } from "../services/interfaces";
import { useAuthStore } from "../../store";

export const useAuthUseCase = (authServices: IAuthServices | null) => {

  const { signIn } = useAuthStore();

  const login = async (data: UserAuthData) => {
    try {
      if (authServices) {
        const res: AuthResponse = await authServices.login(data);
        const logged: boolean = await signIn(res);
        if (!logged) {
          throw new Error(
            "erreur lors de l'initialisation des données utilisateur"
          );
        }
      } else {
        throw new Error("erreur authServices not set");
      }
    } catch (err) {
      throw new Error(String(err));
    }
  };

  return {
    login,
  };
  
};
