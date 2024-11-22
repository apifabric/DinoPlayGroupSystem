import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './DinosaurMeasurement-card.component.html',
  styleUrls: ['./DinosaurMeasurement-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.DinosaurMeasurement-card]': 'true'
  }
})

export class DinosaurMeasurementCardComponent {


}