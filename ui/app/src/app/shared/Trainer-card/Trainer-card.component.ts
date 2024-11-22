import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Trainer-card.component.html',
  styleUrls: ['./Trainer-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Trainer-card]': 'true'
  }
})

export class TrainerCardComponent {


}