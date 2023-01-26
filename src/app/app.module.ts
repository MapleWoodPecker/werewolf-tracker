import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeolocationComponent } from './geolocation/geolocation.component';

@NgModule({
  declarations: [
    AppComponent,
    GeolocationComponent
  ],
  imports: [
    BrowserModule,
    PlatformModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
