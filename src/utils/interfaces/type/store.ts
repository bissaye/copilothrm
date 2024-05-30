import { InvitedUserSignupDatas, UserSignupData } from "../DTO/request";

export type AuthStore = {
    isLogged: boolean;
    signIn: () => Promise<boolean>;
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