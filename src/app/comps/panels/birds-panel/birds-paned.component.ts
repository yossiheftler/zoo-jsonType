import { Component, OnInit } from '@angular/core';
import { BirdService } from 'src/app/services/bird.service';

@Component({
  selector: 'app-birds-paned',
  templateUrl: './birds-paned.component.html',
  styleUrls: ['./birds-paned.component.css']
})
export class BirdsPanedComponent implements OnInit {

  constructor(public birdsSvc:BirdService) { }

  ngOnInit() {
  }

}