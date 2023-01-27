import { Component, Input } from '@angular/core';
import { WeatherData } from '../forecast/weather-forecast';

@Component({
  selector: 'app-moonlight-display',
  templateUrl: './moonlight-display.component.html',
  styleUrls: ['./moonlight-display.component.css']
})
export class MoonlightDisplayComponent {

  @Input() inputData: any;

  constructor() { }

  public filteredDays: WeatherData["days"] = []
  public date: string = "";
  public currentmoonphase: string = "";
  public daysleft: number = 0;
  public daysleftcolor: string = "";

  public probability: number = 0;
  
  ngOnInit(): void {
    if(this.inputData != undefined){
      this.filteredDays.push(this.inputData.days[0]);
      this.filteredDays.push(this.inputData.days.filter((day: any) => day.moonphase == 0.5)[0]);
      this.date = new Date().toLocaleString("en-US", {timeZone: this.inputData.timezone})

      this.currentmoonphase = this.getMoonPhase(this.filteredDays[0].moonphase);
      this.daysleft = this.inputData.days.findIndex((day: any) => day.moonphase === 0.5);

      if(this.daysleft < 3){
        this.daysleftcolor = "dark red";
      } else if(this.daysleft < 7){
        this.daysleftcolor = "orange";
      }
      else{
        this.daysleftcolor = "green";
      }


      
      let rawprob = (100 - this.filteredDays[1].cloudcover) * (1 + (this.filteredDays[1].precipprob/100));
      this.probability = Number((Math.round(rawprob * 100) / 100).toFixed(1));
    }
  }
  getMoonPhase(phase: number): string{
    let name: string = "";
    if (phase === 0) {
      name = "New moon 🌑";
    } else if (phase > 0 && phase < 0.25) {
      name = "Waxing crescent 🌒";
    } else if (phase === 0.25) {
      name = "First quarter 🌓";
    } else if (phase > 0.25 && phase < 0.5) {
      name = "Waxing gibbous 🌔";
    } else if (phase === 0.5) {
      name = "Full moon 🌕";
    } else if (phase > 0.5 && phase < 0.75) {
      name = "Waning gibbous 🌖";
    } else if (phase === 0.75) {
      name = "Last quarter 🌗";
    } else if (phase > 0.75 && phase < 1) {
      name = "Waning crescent 🌘";
    } else {
      name = "Invalid";
    }
    return name;
  }
    
}
