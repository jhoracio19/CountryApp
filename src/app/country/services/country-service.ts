import { RESTCountry } from '../interfaces/rest-countries';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CountryMapper } from '../mappers/country.mapper';
import type { Country } from '../interfaces/country';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient)

  searchByCapital(query: string): Observable<Country[]>{
    query = query.toLowerCase()

    return this.http
      .get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map( resp =>  CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        catchError(error => {
          console.log("Error Fetcking", error);

          return throwError( () => new Error(`No se pudo obtener países con ese ${query}`))
        })
    )
  }

  searchByCountry(query: string){
    query = query.toLowerCase()

    return this.http
      .get<RESTCountry[]>(`${API_URL}/name/${query}`)
      .pipe(
        map( resp => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        delay(3000),
        catchError(error => {
          return throwError( () => new Error(`No se pudo obtener el país con ese ${query}`))
        })
      )
  }
}
