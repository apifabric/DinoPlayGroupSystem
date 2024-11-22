import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'DinosaurTrainerAssociation-new',
  templateUrl: './DinosaurTrainerAssociation-new.component.html',
  styleUrls: ['./DinosaurTrainerAssociation-new.component.scss']
})
export class DinosaurTrainerAssociationNewComponent {
  @ViewChild("DinosaurTrainerAssociationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}