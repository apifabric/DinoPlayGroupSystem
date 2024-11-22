import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PlayGroup-card.component.html',
  styleUrls: ['./PlayGroup-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PlayGroup-card]': 'true'
  }
})

export class PlayGroupCardComponent {


}