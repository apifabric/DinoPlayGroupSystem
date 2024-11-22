import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayGroupFacilityHomeComponent } from './home/PlayGroupFacility-home.component';
import { PlayGroupFacilityNewComponent } from './new/PlayGroupFacility-new.component';
import { PlayGroupFacilityDetailComponent } from './detail/PlayGroupFacility-detail.component';

const routes: Routes = [
  {path: '', component: PlayGroupFacilityHomeComponent},
  { path: 'new', component: PlayGroupFacilityNewComponent },
  { path: ':id', component: PlayGroupFacilityDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PlayGroupFacility-detail-permissions'
      }
    }
  }
];

export const PLAYGROUPFACILITY_MODULE_DECLARATIONS = [
    PlayGroupFacilityHomeComponent,
    PlayGroupFacilityNewComponent,
    PlayGroupFacilityDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayGroupFacilityRoutingModule { }