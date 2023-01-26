import { Component } from '@angular/core';
import { withInMemoryScrolling } from '@angular/router';
import { Platform } from '@angular/cdk/platform';


@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})
export class GeolocationComponent {

  constructor(private platform: Platform) {

  }

  locationMessage: string = "First, we'll need to know where you are.";

  locationDenied: boolean = false;
  locationApproved: boolean = false;

  permsSupportUrl?: string;
  permsBrowserText: string = "blank";

  engineIsBlink: boolean = false;

  askLocation() {
    navigator.geolocation.getCurrentPosition(
      () => this.locationGiven(),
      () => this.locationRefused(),
      { timeout: 10000 })
  }

  locationGiven() {
    this.locationMessage = "Thank you.";
    this.locationApproved = true;
    console.log('User allowed location');
  }

  locationRefused() {
    this.locationMessage = ('It seems you refused.');
    this.locationDenied = true;
    this.displayLocationSupport()
    console.log('User refused location');
  }

  displayLocationSupport() {
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
