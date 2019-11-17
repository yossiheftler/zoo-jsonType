import { Injectable } from '@angular/core';
import { animals } from '../models/animals';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BeastsService {

  constructor(private http:HttpClient) { 

    

    console.log('ctor BeastsService');


    let u = 'https://raw.githubusercontent.com/yossiheftler/zoo-jsonType/master/package-lock.json';
    http.get(u)
      .subscribe(data => {
        console.log('ctgetor Beasts inside subscribe');
        this.beasts = data as animals[]
        this.currentBeast = this.beasts[0]
      })
    console.log('ctor BeastsService end');

  }

  beasts:animals[] = []

  currentBeastIndex = 0
  currentBeast:animals

  
}