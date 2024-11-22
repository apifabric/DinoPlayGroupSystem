import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PlayGroupHost-card.component.html',
  styleUrls: ['./PlayGroupHost-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PlayGroupHost-card]': 'true'
  }
})

export class PlayGroupHostCardComponent {


}