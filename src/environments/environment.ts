import { Injectable } from '@angular/core';

//This file contains sensitive data and is therefore gitignored. The commited file does not contain any keys.

@Injectable({
  providedIn: 'root'
})
export class ApiKeys {
  public weatherApiKey = '';//Put the Visual Crossing Weather API Key

  constructor() { }
}
