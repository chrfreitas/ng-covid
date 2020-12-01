import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class CovidApiService {
  public readonly API_URL: string = environment.apiUrl;

  constructor() { }

  private getCountries() {
  }
}
