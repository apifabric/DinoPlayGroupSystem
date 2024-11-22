import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Trainer-new',
  templateUrl: './Trainer-new.component.html',
  styleUrls: ['./Trainer-new.component.scss']
})
export class TrainerNewComponent {
  @ViewChild("TrainerForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}