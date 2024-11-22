import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PlayGroupSession-card.component.html',
  styleUrls: ['./PlayGroupSession-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PlayGroupSession-card]': 'true'
  }
})

export class PlayGroupSessionCardComponent {


}