import { Component, OnInit } from '@angular/core';
import { BirdService } from 'src/app/services/bird.service';


@Component({
  selector: 'app-birds-card',
  templateUrl: './birds-card.component.html',
  styleUrls: ['./birds-card.component.css']
})
export class BirdCardComponent implements OnInit {

  constructor(public birdsSvc:BirdService) {
    
    
  }

  ngOnInit() {
    
  }

}