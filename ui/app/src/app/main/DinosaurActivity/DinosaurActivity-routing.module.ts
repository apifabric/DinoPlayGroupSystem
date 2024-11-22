import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinosaurActivityHomeComponent } from './home/DinosaurActivity-home.component';
import { DinosaurActivityNewComponent } from './new/DinosaurActivity-new.component';
import { DinosaurActivityDetailComponent } from './detail/DinosaurActivity-detail.component';

const routes: Routes = [
  {path: '', component: DinosaurActivityHomeComponent},
  { path: 'new', component: DinosaurActivityNewComponent },
  { path: ':id', component: DinosaurActivityDetailComponent,
    data: {
      oPermission: {
        permissionId: 'DinosaurActivity-detail-permissions'
      }
    }
  }
];

export const DINOSAURACTIVITY_MODULE_DECLARATIONS = [
    DinosaurActivityHomeComponent,
    DinosaurActivityNewComponent,
    DinosaurActivityDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinosaurActivityRoutingModule { }