import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DINOSAURMEASUREMENT_MODULE_DECLARATIONS, DinosaurMeasurementRoutingModule} from  './DinosaurMeasurement-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DinosaurMeasurementRoutingModule
  ],
  declarations: DINOSAURMEASUREMENT_MODULE_DECLARATIONS,
  exports: DINOSAURMEASUREMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DinosaurMeasurementModule { }