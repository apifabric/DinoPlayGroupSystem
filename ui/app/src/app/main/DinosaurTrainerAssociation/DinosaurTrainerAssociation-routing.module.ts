import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinosaurTrainerAssociationHomeComponent } from './home/DinosaurTrainerAssociation-home.component';
import { DinosaurTrainerAssociationNewComponent } from './new/DinosaurTrainerAssociation-new.component';
import { DinosaurTrainerAssociationDetailComponent } from './detail/DinosaurTrainerAssociation-detail.component';

const routes: Routes = [
  {path: '', component: DinosaurTrainerAssociationHomeComponent},
  { path: 'new', component: DinosaurTrainerAssociationNewComponent },
  { path: ':id', component: DinosaurTrainerAssociationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'DinosaurTrainerAssociation-detail-permissions'
      }
    }
  }
];

export const DINOSAURTRAINERASSOCIATION_MODULE_DECLARATIONS = [
    DinosaurTrainerAssociationHomeComponent,
    DinosaurTrainerAssociationNewComponent,
    DinosaurTrainerAssociationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinosaurTrainerAssociationRoutingModule { }