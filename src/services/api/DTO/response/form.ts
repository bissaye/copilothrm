import { BaseApiResponse} from "./baseResponses";

export interface CountryData {
    countryId: string,
    code: string,
    libelle: string,
    prefixPhone: string
}

export interface CountryResponse extends BaseApiResponse {
    content: CountryData
}

export interface CountryListResponse extends BaseApiResponse {
    content: CountryData[]
}

export interface IndustryData {
    id: string,
    libelle: string
}

export interface IndustryResponse extends BaseApiResponse {
    content: IndustryData
}

export interface IndustryListResponse extends BaseApiResponse {
    content: IndustryData[]
}

export interface TailleEntreprise {
    tailleEntrepriseId: string,
    libelle: string,
    tailleMin: number,
    tailleMax: number
  }

export interface TailleEntrepriseResponse extends BaseApiResponse{
    content: TailleEntreprise[]
}

export interface SignupFormInitDatas {
    countryList:CountryData[],
    industryLise: IndustryData[],
    tailleEntrepriseLsit: TailleEntreprise[]
}