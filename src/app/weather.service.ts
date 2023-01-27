import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiKeys } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { WeatherData } from './forecast/weather-forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private api_keys: ApiKeys, private http: HttpClient) { }

  //Get api key from environment.ts
  private api_key: string = this.api_keys.weatherApiKey.toString();

  //tap(_ => console.log('fetched weather')),
  //catchError(this.handleError<DayWeather[]>('getWeather', [])),
  
  getWeather(latitude: number, longitude: number): Observable<WeatherData>{

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude}%2C${longitude}/next30days?unitGroup=metric&include=days&elements=conditions,icon,moonrise,moonset,cloudcover,sunrise,sunset,moonphase,precip,precipprob,precipcover,preciptype,datetime&key=${this.api_key}&contentType=json`;

    console.log(`Calling api with url ${url}`)
    
    const forecast = this.http.get<WeatherData>(url)
      .pipe(
        tap(_ => console.log('Successfully fetched weather')),
        map((data: WeatherData) => {
          console.log("Amount of days fetched: " + data.days.length.toString())
          return data;
        }),
        catchError(this.handleError<WeatherData>('getWeather'))
      );

    return forecast;

  }
  //
  /**
  * Handle Http operation that failed.
  * Let the app continue.
  *
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.

      return of(result as T);
    };
  }
}
