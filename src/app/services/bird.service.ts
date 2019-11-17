import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { animals } from 'src/app/models/animals';

@Injectable({
  providedIn: 'root'
})
export class BirdService {

  constructor(private http:HttpClient) { 

   

    console.log('ctor BeastsService');


    let u = 'https://raw.githubusercontent.com/yossiheftler/zoo-jsonType/master/package-lock.json';
    http.get(u)
      .subscribe(data => {
        console.log('ctgetor Beasts inside subscribe');
        this.beasts = data as animals[]
        this.currentBeast = this.beasts[0]
      })
    

  }

  beasts:animals[] = []

  currentBeastIndex = 0
  currentBeast:animals

  
}