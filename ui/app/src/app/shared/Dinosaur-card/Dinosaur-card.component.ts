import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Dinosaur-card.component.html',
  styleUrls: ['./Dinosaur-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Dinosaur-card]': 'true'
  }
})

export class DinosaurCardComponent {


}