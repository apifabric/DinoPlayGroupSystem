import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinosaurMeasurementHomeComponent } from './home/DinosaurMeasurement-home.component';
import { DinosaurMeasurementNewComponent } from './new/DinosaurMeasurement-new.component';
import { DinosaurMeasurementDetailComponent } from './detail/DinosaurMeasurement-detail.component';

const routes: Routes = [
  {path: '', component: DinosaurMeasurementHomeComponent},
  { path: 'new', component: DinosaurMeasurementNewComponent },
  { path: ':id', component: DinosaurMeasurementDetailComponent,
    data: {
      oPermission: {
        permissionId: 'DinosaurMeasurement-detail-permissions'
      }
    }
  }
];

export const DINOSAURMEASUREMENT_MODULE_DECLARATIONS = [
    DinosaurMeasurementHomeComponent,
    DinosaurMeasurementNewComponent,
    DinosaurMeasurementDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinosaurMeasurementRoutingModule { }