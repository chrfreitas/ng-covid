import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ICountry, ICountryStatus } from './covid-api.interface';
import { COVID_API_ROUTE } from './covid-api.routes';

@Injectable({ providedIn: 'root' })
export class CovidApiService {
  public readonly BASE_URL: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getCountries(): Observable<ICountry> {
    const countryUrl = `${this.BASE_URL}/${COVID_API_ROUTE.COUNTRIES}`;
    return this.http.get<ICountry>(countryUrl);
  }

  public getCountryStatus(country: string): Observable<ICountryStatus> {
    const countryStatusUrl = `${this.BASE_URL}/${COVID_API_ROUTE.COUNTRY_STATUS}/${country}`;
    return this.http.get<ICountryStatus>(countryStatusUrl);
  }
}
