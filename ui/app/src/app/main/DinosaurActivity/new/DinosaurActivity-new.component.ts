import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'DinosaurActivity-new',
  templateUrl: './DinosaurActivity-new.component.html',
  styleUrls: ['./DinosaurActivity-new.component.scss']
})
export class DinosaurActivityNewComponent {
  @ViewChild("DinosaurActivityForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}