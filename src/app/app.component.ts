import { Component, OnInit } from '@angular/core';

import { CovidApiService } from '../core/services/covid-api.service';

@Component({
  selector: 'app-component',
  template: '<div>Hello</div>',
})
export class AppComponent implements OnInit {
  constructor(private covidApiService: CovidApiService) {}

  ngOnInit(): void {
    this.covidApiService.getCountries().subscribe((a) => console.log(a));
  }
}
