import {CountryListResponse, CountryResponse, IndustryListResponse, TailleEntrepriseResponse } from '../../DTO/response'

export interface IFormServices {

    // Countries
    getAllCountries() : Promise<CountryListResponse>;
    getCountryById(countryId: string): Promise<CountryResponse>;

    // Industries
    getAllIndustries() : Promise<IndustryListResponse>;

    // Tailles d'entreprise
    getTailleEntreprise(): Promise<TailleEntrepriseResponse>;
}