import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PlayGroup-new',
  templateUrl: './PlayGroup-new.component.html',
  styleUrls: ['./PlayGroup-new.component.scss']
})
export class PlayGroupNewComponent {
  @ViewChild("PlayGroupForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}