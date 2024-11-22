import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PLAYGROUPSESSION_MODULE_DECLARATIONS, PlayGroupSessionRoutingModule} from  './PlayGroupSession-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PlayGroupSessionRoutingModule
  ],
  declarations: PLAYGROUPSESSION_MODULE_DECLARATIONS,
  exports: PLAYGROUPSESSION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayGroupSessionModule { }