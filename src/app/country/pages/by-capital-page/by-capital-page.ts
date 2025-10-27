import { Component, inject, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { SearchInput } from '../../components/search-input/search-input';
import { CountryService } from '../../services/country-service';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService = inject(CountryService);
  query = signal('');


  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([])

  onSearch(query: string) {
    if ( this.isLoading() ) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCapital(query)
    .subscribe( (countries) => {
      this.isLoading.set(false)
      this.countries.set(countries)
      console.log(countries);
    } )
    };
}

