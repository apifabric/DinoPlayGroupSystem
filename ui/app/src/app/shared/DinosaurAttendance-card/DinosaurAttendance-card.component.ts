import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './DinosaurAttendance-card.component.html',
  styleUrls: ['./DinosaurAttendance-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.DinosaurAttendance-card]': 'true'
  }
})

export class DinosaurAttendanceCardComponent {


}