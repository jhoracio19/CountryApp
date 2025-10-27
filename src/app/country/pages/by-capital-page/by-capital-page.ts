import { Component, inject, resource, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { SearchInput } from '../../components/search-input/search-input';
import { CountryService } from '../../services/country-service';
import { Country } from '../../interfaces/country';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {

  countryService = inject(CountryService);
  query = signal('');

  countryResource = rxResource ({
    params: () => ({query: this.query() }),
    stream: ({ params }) => {
      if(!params.query) return  of([]);
        return this.countryService.searchByCapital(params.query)
    }
  })


  // countryService = inject(CountryService);
  // query = signal('');

  // countryResource = resource({
  //   params: () => ({query: this.query() }),
  //   loader: async({ params }) => {
  //     if(!params.query) return []

  //     return await firstValueFrom(
  //       this.countryService.searchByCapital(params.query)
  //     )
  //   }
  // })



  // isLoading = signal(false);
  // isError = signal<string | null>(null);
  // countries = signal<Country[]>([])

  // onSearch(query: string) {
  //   if ( this.isLoading() ) return;

  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //   this.countryService.searchByCapital(query)
  //   .subscribe( {
  //     next: (countries) => {
  //       this.isLoading.set(false)
  //       this.countries.set(countries)
  //     },
  //     error: (err) => {
  //       this.isLoading.set(false)
  //       this.countries.set([])
  //       this.isError.set(err)
  //     },
  //   } )
  //   };
}

