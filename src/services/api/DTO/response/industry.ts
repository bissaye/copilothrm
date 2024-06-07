import { BaseApiResponse} from "./baseResponses";

export interface IndustryData {
    industrieId: string,
    libelle: string
}

export interface IndustryResponse extends BaseApiResponse {
    content: IndustryData
}

export interface IndustryListResponse extends BaseApiResponse {
    content: IndustryData[]
}