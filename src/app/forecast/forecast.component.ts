import { Component } from '@angular/core';
import { WeatherData } from './weather-forecast';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {

  constructor(private http: HttpClient, private router: Router, private weatherApi: WeatherService) { }

  //Default location is Greenwich
  latitude: number = 51.4934;
  longitude: number = 0.0098;

  days: WeatherData["days"] = [];

  ngOnInit() {
    //get location from session storage
    if (sessionStorage.getItem('user_lat') != null || sessionStorage.getItem('user_long') != null) {
      this.latitude = Number(sessionStorage.getItem('user_lat'));
      this.longitude = Number(sessionStorage.getItem('user_long'));
      console.log(`Successfully retrieved location from session storage: ${this.latitude}, ${this.longitude}`);

      this.weatherApi.getWeather(this.latitude, this.longitude)
      .subscribe(data => this.displayForecast(data));

      console.log("Subscribed")
    }
    //if location not in session storage, display error and redirect to home page
    else {
      console.log("No location found in session storage");
      alert("No location found. Please give a location.");
      this.router.navigate(['']);
    }
  }

  displayForecast(data: WeatherData): void {
    this.days = data.days;
    //if data fetch was successful, display forecast
    if (this.days.length > 0) {
      
    }
    //else display error message
    else {
      alert("There was an error retrieving the weather data. Please try again in a bit.");
      this.router.navigate(['']);
    }
}
}



