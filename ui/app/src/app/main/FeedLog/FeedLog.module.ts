import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {FEEDLOG_MODULE_DECLARATIONS, FeedLogRoutingModule} from  './FeedLog-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    FeedLogRoutingModule
  ],
  declarations: FEEDLOG_MODULE_DECLARATIONS,
  exports: FEEDLOG_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeedLogModule { }