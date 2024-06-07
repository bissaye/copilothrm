import {CountryListResponse, CountryResponse, IndustryListResponse } from '../../DTO/response'

export interface IFormServices {

    // Countries
    getAllCountries() : Promise<CountryListResponse>;
    getCountryById(countryId: string): Promise<CountryResponse>;

    // Industries
    getAllIndustries() : Promise<IndustryListResponse>;
}