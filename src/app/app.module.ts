import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './app/components/home/home.component';
import { FeatureComponent } from './app/components/feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
