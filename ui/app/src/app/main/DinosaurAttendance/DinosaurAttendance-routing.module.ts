import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinosaurAttendanceHomeComponent } from './home/DinosaurAttendance-home.component';
import { DinosaurAttendanceNewComponent } from './new/DinosaurAttendance-new.component';
import { DinosaurAttendanceDetailComponent } from './detail/DinosaurAttendance-detail.component';

const routes: Routes = [
  {path: '', component: DinosaurAttendanceHomeComponent},
  { path: 'new', component: DinosaurAttendanceNewComponent },
  { path: ':id', component: DinosaurAttendanceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'DinosaurAttendance-detail-permissions'
      }
    }
  }
];

export const DINOSAURATTENDANCE_MODULE_DECLARATIONS = [
    DinosaurAttendanceHomeComponent,
    DinosaurAttendanceNewComponent,
    DinosaurAttendanceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinosaurAttendanceRoutingModule { }