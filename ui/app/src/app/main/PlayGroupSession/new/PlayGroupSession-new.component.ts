import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PlayGroupSession-new',
  templateUrl: './PlayGroupSession-new.component.html',
  styleUrls: ['./PlayGroupSession-new.component.scss']
})
export class PlayGroupSessionNewComponent {
  @ViewChild("PlayGroupSessionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}