import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PLAYGROUPHOST_MODULE_DECLARATIONS, PlayGroupHostRoutingModule} from  './PlayGroupHost-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PlayGroupHostRoutingModule
  ],
  declarations: PLAYGROUPHOST_MODULE_DECLARATIONS,
  exports: PLAYGROUPHOST_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayGroupHostModule { }