import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CovidApiService } from '../../../core/services/covid-api.service';
import { ICountry } from '../../../core/services/covid-api.interface';

@Component({
  selector: 'app-list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListFeatureComponent implements OnInit {
  public countries$: Observable<ICountry[]> | null = null;

  constructor(private covidApiService: CovidApiService) {}

  ngOnInit() {
    this.countries$ = this.covidApiService.getCountries();
  }
}
