import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinosaurHomeComponent } from './home/Dinosaur-home.component';
import { DinosaurNewComponent } from './new/Dinosaur-new.component';
import { DinosaurDetailComponent } from './detail/Dinosaur-detail.component';

const routes: Routes = [
  {path: '', component: DinosaurHomeComponent},
  { path: 'new', component: DinosaurNewComponent },
  { path: ':id', component: DinosaurDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Dinosaur-detail-permissions'
      }
    }
  },{
    path: ':dinosaur_id/DinosaurActivity', loadChildren: () => import('../DinosaurActivity/DinosaurActivity.module').then(m => m.DinosaurActivityModule),
    data: {
        oPermission: {
            permissionId: 'DinosaurActivity-detail-permissions'
        }
    }
},{
    path: ':dinosaur_id/DinosaurAttendance', loadChildren: () => import('../DinosaurAttendance/DinosaurAttendance.module').then(m => m.DinosaurAttendanceModule),
    data: {
        oPermission: {
            permissionId: 'DinosaurAttendance-detail-permissions'
        }
    }
},{
    path: ':dinosaur_id/DinosaurMeasurement', loadChildren: () => import('../DinosaurMeasurement/DinosaurMeasurement.module').then(m => m.DinosaurMeasurementModule),
    data: {
        oPermission: {
            permissionId: 'DinosaurMeasurement-detail-permissions'
        }
    }
},{
    path: ':dinosaur_id/DinosaurSkill', loadChildren: () => import('../DinosaurSkill/DinosaurSkill.module').then(m => m.DinosaurSkillModule),
    data: {
        oPermission: {
            permissionId: 'DinosaurSkill-detail-permissions'
        }
    }
},{
    path: ':dinosaur_id/DinosaurTrainerAssociation', loadChildren: () => import('../DinosaurTrainerAssociation/DinosaurTrainerAssociation.module').then(m => m.DinosaurTrainerAssociationModule),
    data: {
        oPermission: {
            permissionId: 'DinosaurTrainerAssociation-detail-permissions'
        }
    }
},{
    path: ':dinosaur_id/FeedLog', loadChildren: () => import('../FeedLog/FeedLog.module').then(m => m.FeedLogModule),
    data: {
        oPermission: {
            permissionId: 'FeedLog-detail-permissions'
        }
    }
}
];

export const DINOSAUR_MODULE_DECLARATIONS = [
    DinosaurHomeComponent,
    DinosaurNewComponent,
    DinosaurDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinosaurRoutingModule { }