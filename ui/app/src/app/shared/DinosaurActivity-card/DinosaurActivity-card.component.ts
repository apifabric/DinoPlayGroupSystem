import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './DinosaurActivity-card.component.html',
  styleUrls: ['./DinosaurActivity-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.DinosaurActivity-card]': 'true'
  }
})

export class DinosaurActivityCardComponent {


}