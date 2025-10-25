import { Component } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { SearchInput } from '../../components/search-input/search-input';


@Component({
  selector: 'by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {


}
