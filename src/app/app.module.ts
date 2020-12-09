import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { AppComponent } from './app.component';
import { ListFeatureComponent } from './features/list/list.component';

@NgModule({
  declarations: [AppComponent, ListFeatureComponent],
  imports: [BrowserModule, RouterModule.forRoot([]), CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
