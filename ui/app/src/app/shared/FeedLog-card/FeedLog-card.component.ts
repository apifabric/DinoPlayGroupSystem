import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './FeedLog-card.component.html',
  styleUrls: ['./FeedLog-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.FeedLog-card]': 'true'
  }
})

export class FeedLogCardComponent {


}