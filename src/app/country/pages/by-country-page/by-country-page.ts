import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { SearchInput } from "../../components/search-input/search-input";

@Component({
  selector: 'by-country-page',
  imports: [CountryList, SearchInput],
  templateUrl: './by-country-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPage { }
