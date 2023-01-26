import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';


@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent {

  constructor(private platform: Platform, private router: Router) {

  }

  locationMessage: string = "First, we'll need to know where you are.";

  buttonMessage: string = "Give location";
  refreshMsg: string = "";
  locationDenied: boolean = false;

  permsSupportUrl?: string;
  permsBrowserText: string = "blank";

  engineIsBlink: boolean = false;

  ngOnInit(): void {
    //check if the coordinates are already in the session storage
    if (sessionStorage.getItem('user_lat') && sessionStorage.getItem('user_long')) {
      //convert them to int and give them to the locationGiven function
      this.locationGiven();
    }
  }
  

  askLocation() {
    //check if cooridnates are already in the session storage
    if (sessionStorage.getItem('user_lat') && sessionStorage.getItem('user_long')) {
      this.seeForecast();
    }
    else {
      navigator.geolocation.getCurrentPosition((position) => {
            sessionStorage.setItem('user_lat', position.coords.latitude.toString());
            sessionStorage.setItem('user_long', position.coords.longitude.toString());
            this.locationGiven()},
        () => this.locationRefused(),
        { timeout: 10000 })
    }
  }

  seeForecast(){
    this.router.navigate(['/forecast']);
  }

  locationGiven() {
    this.locationDenied = false;
    this.locationMessage = "Coordinates loaded";
    console.log('User allowed location');
    this.buttonMessage = "Display forecast";
    this.refreshMsg = "If you changed you location, click here";
    
  }

  locationRefused() {
    this.locationMessage = ('It seems you refused.');
    this.locationDenied = true;
    this.displayLocationSupport()
    console.log('User refused location');
  }

  clearLocation() {
    console.log('Clearing location');
    sessionStorage.removeItem('user_lat');
    sessionStorage.removeItem('user_long');
    this.locationMessage = "First, we'll need to know where you are.";
    this.buttonMessage = "Give location";
    this.refreshMsg = "";
    this.locationDenied = false;
  }

  displayLocationSupport() {
    this.buttonMessage = "Try again";

    if (this.platform.FIREFOX) {
      console.log("Firefox detected");
      this.permsSupportUrl = "https://support.mozilla.org/en-US/kb/site-permissions-panel";
      this.permsBrowserText = "Firefox";

    }
    else if (this.platform.EDGE) {
      console.log("Edge detected");
      this.permsSupportUrl = "https://www.groovypost.com/howto/enable-or-disable-site-permissions-in-microsoft-edge/"
      this.permsBrowserText = "Edge";
    }
    else if (this.platform.BLINK) {
      console.log("Blink engine detected");
      this.engineIsBlink = true;
    }
    else if (this.platform.SAFARI) {
      console.log("Safari detected");
      this.permsSupportUrl = "https://support.apple.com/en-ca/guide/safari/ibrwe2159f50/mac";
      this.permsBrowserText = "Safari";
    }
    else{
      console.log("Failed to find browser type");
    }
  }
}
