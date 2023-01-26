import { PlatformModule } from '@angular/cdk/platform';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GeolocationComponent,
    ForecastComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PlatformModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
