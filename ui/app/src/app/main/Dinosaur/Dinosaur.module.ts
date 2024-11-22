import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DINOSAUR_MODULE_DECLARATIONS, DinosaurRoutingModule} from  './Dinosaur-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DinosaurRoutingModule
  ],
  declarations: DINOSAUR_MODULE_DECLARATIONS,
  exports: DINOSAUR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DinosaurModule { }