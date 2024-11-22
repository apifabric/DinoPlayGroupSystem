import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DINOSAURACTIVITY_MODULE_DECLARATIONS, DinosaurActivityRoutingModule} from  './DinosaurActivity-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DinosaurActivityRoutingModule
  ],
  declarations: DINOSAURACTIVITY_MODULE_DECLARATIONS,
  exports: DINOSAURACTIVITY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DinosaurActivityModule { }