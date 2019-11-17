import { Component } from '@angular/core';
import { PagingService } from 'src/app/services/paging.service';
import { BirdService } from 'src/app/services/bird.service';
import { BeastsService } from 'src/app/services/beasts.service';
import { WildService } from 'src/app/services/wild.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avra-zoo';

  constructor(public paging: PagingService, public birds: BirdService,
    public beasts: BeastsService, public wild: WildService) { }

  getUp(ev) {
    console.log('AppComponent  getUp', ev);

    switch (this.paging.currentPanel) {
      case 'birds':
        let newBirdIndex = this.getNewCuurentIndex(
        this.birds.currentBirdIndex, ev, this.birds.birds)
        this.birds.currentBirdIndex = newBirdIndex
        this.birds.currentBird = this.birds.birds[newBirdIndex]
        break;
      case 'beasts':
        let newCowIndex = this.getNewCuurentIndex(
        this.beasts.currentBeastsIndex, ev, this.beasts.beasts)
        this.beasts.currentBeastsIndex = newCowIndex
        this.beasts.currentBeast = this.beasts.beasts[newCowIndex]
        break;
      case 'wild':
        let newWildIndex = this.getNewCuurentIndex(
        this.wild.currentWildIndex, ev, this.wild.wildAnimals)
        this.wild.currentWildIndex = newWildIndex
        this.wild.currentWild = this.wild.wildAnimals[newWildIndex]
        break;

      default:
        break;
    }

  }

  private getNewCuurentIndex(current: number, delta: number, array: {}[]): number {
    let max = array.length - 1;
    let newIndex = current + delta
    if (newIndex > max) {
      newIndex = 0
    }
    if (newIndex < 0) {
      newIndex = max
    }
    return newIndex
  }

}