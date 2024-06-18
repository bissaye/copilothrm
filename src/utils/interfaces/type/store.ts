import { InvitedUserSignupDatas, OrganizationData, UserSignupData } from "../../../services/api/DTO/request";
import { CountryData, IndustryData, TailleEntreprise, UserAuthResponse } from "../../../services/api/DTO/response";

export type AuthStore = {
    isLogged: boolean;
    signIn: (data: UserAuthResponse) => Promise<boolean>;
    signOut: () => Promise<boolean>;
    initAuth: () => void;
  };

export type SignupStore = {
  userData: UserSignupData;
  setUserData: (values: UserSignupData) => void;
  initCountryList: (countries: CountryData[]) => void;
  countryList: CountryData[];
  initIndustryList: (industries: IndustryData[]) => void;
  industryList: IndustryData[];
  tailleEntrepriseList: TailleEntreprise[];
  initTailleEntrepriseList: (taillesEntreprise: TailleEntreprise[]) => void;
  gender: [
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
  setInvitedUserDatas: (values: InvitedUserSignupDatas) => void;
  initCountryList: (countries: CountryData[]) => void;
  countryList: CountryData[];
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

export type InviteMemberStore = {
  showInviteModal: boolean;
  setShowInviteModal: (show: boolean) => void
}

export type SpinnerStore = {
  loading: boolean;
  text?: string;
  showSpinner: (text?: string) => void;
  hideSpinner: () => void;
}

export type AddOrgStore = {
  orgData: OrganizationData,
  setOrgData: (values: OrganizationData) => void;
  initCountryList: (countries: CountryData[]) => void;
  countryList: CountryData[];
  initIndustryList: (industries: IndustryData[]) => void;
  industryList: IndustryData[];
  tailleEntrepriseList: TailleEntreprise[];
  initTailleEntrepriseList: (taillesEntreprise: TailleEntreprise[]) => void;
}