import { Component } from '@angular/core';
import { ApiKeys } from 'src/environments/environment';
import { DayWeather } from './day-weather';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {

  constructor (private api_keys: ApiKeys, private http: HttpClient, private router: Router) { }

  //Default location is Greenwich
  latitude: number = 51.4934;
  longitude: number = 0.0098;

  //Get api key from environment.ts
  api_key:string = this.api_keys.weatherApiKey.toString();

  days: DayWeather[] = [];

  ngOnInit() {
     //get location from session storage
      if (sessionStorage.getItem('user_lat') != null || sessionStorage.getItem('user_long') != null) {
        this.latitude = Number(sessionStorage.getItem('user_lat'));
        this.longitude = Number(sessionStorage.getItem('user_long'));
        console.log(`Successfully retrieved location from session storage: ${this.latitude}, ${this.longitude}`);

        //fetch forecast json from api
        this.http.get<DayWeather[]>(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.latitude}%2C${this.longitude}/next30days?unitGroup=metric&include=days&elements=conditions,icon,moonrise,moonset,cloudcover,sunrise,sunset,moonphase,precip,precipprob,precipcover,preciptype,datetime&key=${this.api_key}&contentType=json`).subscribe(data => {
          this.days = data;
          console.log("Successfully retrieved forecast data from api");
        });

      }
      //if location not in session storage, display error and redirect to home page
      else {
        console.log("No location found in session storage");
        alert("No location found in session storage. Please enter a location.");
        this.router.navigate(['']);
      }
  }
}
