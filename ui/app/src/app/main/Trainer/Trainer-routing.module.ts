import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerHomeComponent } from './home/Trainer-home.component';
import { TrainerNewComponent } from './new/Trainer-new.component';
import { TrainerDetailComponent } from './detail/Trainer-detail.component';

const routes: Routes = [
  {path: '', component: TrainerHomeComponent},
  { path: 'new', component: TrainerNewComponent },
  { path: ':id', component: TrainerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Trainer-detail-permissions'
      }
    }
  },{
    path: ':trainer_id/DinosaurTrainerAssociation', loadChildren: () => import('../DinosaurTrainerAssociation/DinosaurTrainerAssociation.module').then(m => m.DinosaurTrainerAssociationModule),
    data: {
        oPermission: {
            permissionId: 'DinosaurTrainerAssociation-detail-permissions'
        }
    }
}
];

export const TRAINER_MODULE_DECLARATIONS = [
    TrainerHomeComponent,
    TrainerNewComponent,
    TrainerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }