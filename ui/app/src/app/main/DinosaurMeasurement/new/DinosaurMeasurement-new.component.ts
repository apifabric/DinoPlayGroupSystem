import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'DinosaurMeasurement-new',
  templateUrl: './DinosaurMeasurement-new.component.html',
  styleUrls: ['./DinosaurMeasurement-new.component.scss']
})
export class DinosaurMeasurementNewComponent {
  @ViewChild("DinosaurMeasurementForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}