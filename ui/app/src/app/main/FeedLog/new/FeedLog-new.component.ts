import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'FeedLog-new',
  templateUrl: './FeedLog-new.component.html',
  styleUrls: ['./FeedLog-new.component.scss']
})
export class FeedLogNewComponent {
  @ViewChild("FeedLogForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}