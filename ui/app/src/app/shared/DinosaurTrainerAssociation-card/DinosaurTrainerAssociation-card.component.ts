import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './DinosaurTrainerAssociation-card.component.html',
  styleUrls: ['./DinosaurTrainerAssociation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.DinosaurTrainerAssociation-card]': 'true'
  }
})

export class DinosaurTrainerAssociationCardComponent {


}