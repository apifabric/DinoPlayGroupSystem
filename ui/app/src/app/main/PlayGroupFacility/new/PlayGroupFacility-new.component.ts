import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PlayGroupFacility-new',
  templateUrl: './PlayGroupFacility-new.component.html',
  styleUrls: ['./PlayGroupFacility-new.component.scss']
})
export class PlayGroupFacilityNewComponent {
  @ViewChild("PlayGroupFacilityForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}