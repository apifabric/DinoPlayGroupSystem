import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PLAYGROUP_MODULE_DECLARATIONS, PlayGroupRoutingModule} from  './PlayGroup-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PlayGroupRoutingModule
  ],
  declarations: PLAYGROUP_MODULE_DECLARATIONS,
  exports: PLAYGROUP_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayGroupModule { }