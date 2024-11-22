import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DINOSAURATTENDANCE_MODULE_DECLARATIONS, DinosaurAttendanceRoutingModule} from  './DinosaurAttendance-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DinosaurAttendanceRoutingModule
  ],
  declarations: DINOSAURATTENDANCE_MODULE_DECLARATIONS,
  exports: DINOSAURATTENDANCE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DinosaurAttendanceModule { }