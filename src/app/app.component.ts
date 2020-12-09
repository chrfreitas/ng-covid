import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  template: '<div><app-list-component></app-list-component></div>',
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
