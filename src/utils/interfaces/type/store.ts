import { InvitedUserSignupDatas, UserSignupData } from "../../../services/api/DTO/request";
import { CountryData, IndustryData, UserAuthResponse } from "../../../services/api/DTO/response";

export type AuthStore = {
    isLogged: boolean;
    signIn: (data: UserAuthResponse) => Promise<boolean>;
    signOut: () => Promise<boolean>;
    initAuth: () => void;
  };

export type SignupStore = {
  signupStep: 1 | 2 | 3 | 4;
  setSignupStep: (step: 1 | 2 | 3 | 4) => void;
  userData: UserSignupData;
  setUserData: (values: UserSignupData) => void;
  initCountryList: (countries: CountryData[]) => void;
  countryList: CountryData[];
  initIndustryList: (industries: IndustryData[]) => void;
  industryList: IndustryData[];
  gender: [{ 
    value: string; 
    text: string; 
  },
  { 
    value: string; 
    text: string; 
  },
  { 
    value: string; 
    text: string; 
  }]
}

export type InvitationSignupStore = {
  invitedUserDatas: InvitedUserSignupDatas;
  setInvitedUserDatas: (values: InvitedUserSignupDatas) => void
}

export type InviteMemberStore = {
  showInviteModal: boolean;
  setShowInviteModal: (show: boolean) => void
}

export type SpinnerStore = {
  loading: boolean;
  showSpinner: () => void;
  hideSpinner: () => void;
}