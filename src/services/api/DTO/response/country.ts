import { BaseApiResponse} from "./baseResponses";

export interface CountryData {
    countryId: string,
    code: string,
    libelle: string
}

export interface CountryResponse extends BaseApiResponse {
    content: CountryData
}

export interface CountryListResponse extends BaseApiResponse {
    content: CountryData[]
}