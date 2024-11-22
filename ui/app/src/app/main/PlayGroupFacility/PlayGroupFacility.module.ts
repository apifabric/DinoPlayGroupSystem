import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PLAYGROUPFACILITY_MODULE_DECLARATIONS, PlayGroupFacilityRoutingModule} from  './PlayGroupFacility-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PlayGroupFacilityRoutingModule
  ],
  declarations: PLAYGROUPFACILITY_MODULE_DECLARATIONS,
  exports: PLAYGROUPFACILITY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayGroupFacilityModule { }