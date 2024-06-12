import { CountryListResponse, CountryResponse, IndustryListResponse, TailleEntrepriseResponse } from "../../DTO/response";
import { IApiRequestService, IFormServices } from "../interfaces";


export class FormServices implements IFormServices {

    private apiService: IApiRequestService;

    constructor(apiService: IApiRequestService) {
        this.apiService = apiService;
    }

    public async getAllCountries(): Promise<CountryListResponse> {
        const response : CountryListResponse = await this.apiService.get<CountryListResponse>("/country/");    
        return response;
    }

    public async getCountryById(countryId: string): Promise<CountryResponse> {
        const response : CountryResponse = await this.apiService.get<CountryResponse>(`/country/${countryId}`);    
        return response;
    }

    public async getAllIndustries(): Promise<IndustryListResponse> {
        const response : IndustryListResponse = await this.apiService.get<IndustryListResponse>("/industrie/");    
        return response;
    }
    public async getTailleEntreprise(): Promise<TailleEntrepriseResponse> {
        const response : TailleEntrepriseResponse = await this.apiService.get<TailleEntrepriseResponse>("/taille-entreprise/");    
        return response;
    }
}