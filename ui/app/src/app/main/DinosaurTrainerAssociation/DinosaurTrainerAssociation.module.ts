import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DINOSAURTRAINERASSOCIATION_MODULE_DECLARATIONS, DinosaurTrainerAssociationRoutingModule} from  './DinosaurTrainerAssociation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DinosaurTrainerAssociationRoutingModule
  ],
  declarations: DINOSAURTRAINERASSOCIATION_MODULE_DECLARATIONS,
  exports: DINOSAURTRAINERASSOCIATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DinosaurTrainerAssociationModule { }