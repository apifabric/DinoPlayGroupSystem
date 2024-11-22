import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinosaurSkillHomeComponent } from './home/DinosaurSkill-home.component';
import { DinosaurSkillNewComponent } from './new/DinosaurSkill-new.component';
import { DinosaurSkillDetailComponent } from './detail/DinosaurSkill-detail.component';

const routes: Routes = [
  {path: '', component: DinosaurSkillHomeComponent},
  { path: 'new', component: DinosaurSkillNewComponent },
  { path: ':id', component: DinosaurSkillDetailComponent,
    data: {
      oPermission: {
        permissionId: 'DinosaurSkill-detail-permissions'
      }
    }
  }
];

export const DINOSAURSKILL_MODULE_DECLARATIONS = [
    DinosaurSkillHomeComponent,
    DinosaurSkillNewComponent,
    DinosaurSkillDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DinosaurSkillRoutingModule { }