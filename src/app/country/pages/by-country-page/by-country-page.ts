import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { SearchInput } from "../../components/search-input/search-input";
import { CountryService } from '../../services/country-service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'by-country-page',
  imports: [CountryList, SearchInput],
  templateUrl: './by-country-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPage {
  countryService = inject(CountryService);
  query = signal('');


  countryResource = rxResource ({
    params: () => ({query: this.query() }),
    stream: ({ params }) => {
      if(!params.query) return  of([]);
        return this.countryService.searchByCountry(params.query)
    }
  })


  // countryResource = resource({
  //   params: () => ({query: this.query() }),
  //   loader: async({ params }) => {
  //     if(!params.query) return []

  //     return await firstValueFrom(
  //       this.countryService.searchByCountry(params.query)
  //     )
  //   }
  // })
}
