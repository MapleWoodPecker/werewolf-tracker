import { Component } from '@angular/core';
import { withInMemoryScrolling } from '@angular/router';
//import {PlatformModule} from '@angular/cdk/platform'; 

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent {
  constructor() { }

  locationMessage: string = "First, we'll need to know where you are.";
  locationDenial: boolean = false;

  permsSupportUrl?: string;
  permsSupportText?: string;

  getLocation(){
    navigator.geolocation.getCurrentPosition(
      () => this.locationGiven(),
      () => this.locationRefused(),
      {timeout:10000})
  }

  locationGiven(){
    this.locationMessage = "Thank you.";
    console.log('User allowed location');
  }

  locationRefused(){
    this.locationMessage=('It seems you refused.');
    this.locationDenial = true;
    console.log('User refused location');
  }

  

}
