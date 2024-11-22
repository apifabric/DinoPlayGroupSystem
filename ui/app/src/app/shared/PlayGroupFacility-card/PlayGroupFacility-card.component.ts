import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PlayGroupFacility-card.component.html',
  styleUrls: ['./PlayGroupFacility-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PlayGroupFacility-card]': 'true'
  }
})

export class PlayGroupFacilityCardComponent {


}