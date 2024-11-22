import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Dinosaur-new',
  templateUrl: './Dinosaur-new.component.html',
  styleUrls: ['./Dinosaur-new.component.scss']
})
export class DinosaurNewComponent {
  @ViewChild("DinosaurForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}