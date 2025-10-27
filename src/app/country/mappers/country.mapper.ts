import type { Country } from "../interfaces/country"
import type { RESTCountry } from "../interfaces/rest-countries"


export class CountryMapper{
  // static RestCountry => Country
  static mapRestCountryToCountry( restCountry: RESTCountry): Country{
    return {
      capital: restCountry.capital.join(','),
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name: restCountry.translations['spa'].common ?? 'No Spanish Name',
      population: restCountry.population
    }
  }


  // static RestCountry[] => Country[]
  static mapRestCountryArrayToCountryArray(restCountry: RESTCountry[]): Country[]{
    return restCountry.map(this.mapRestCountryToCountry)
  }
}
