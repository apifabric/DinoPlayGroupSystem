import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './DinosaurSkill-card.component.html',
  styleUrls: ['./DinosaurSkill-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.DinosaurSkill-card]': 'true'
  }
})

export class DinosaurSkillCardComponent {


}