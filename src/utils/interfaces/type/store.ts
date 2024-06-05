import { InvitedUserSignupDatas, UserSignupData } from "../../../services/api/DTO/request";
import { AuthResponse } from "../../../services/api/DTO/response";

export type AuthStore = {
    isLogged: boolean;
    signIn: (data: AuthResponse) => Promise<boolean>;
    signOut: () => Promise<boolean>;
    initAuth: () => void;
  };

export type SignupStore = {
  signupStep: 1 | 2 | 3 | 4;
  setSignupStep: (step: 1 | 2 | 3 | 4) => void;
  userData: UserSignupData;
  setUserData: (values: UserSignupData) => void
}

export type InvitationSignupStore = {
  invitedUserDatas: InvitedUserSignupDatas;
  setInvitedUserDatas: (values: InvitedUserSignupDatas) => void
}