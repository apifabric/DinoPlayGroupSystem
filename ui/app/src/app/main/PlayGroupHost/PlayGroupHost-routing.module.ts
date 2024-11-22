import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayGroupHostHomeComponent } from './home/PlayGroupHost-home.component';
import { PlayGroupHostNewComponent } from './new/PlayGroupHost-new.component';
import { PlayGroupHostDetailComponent } from './detail/PlayGroupHost-detail.component';

const routes: Routes = [
  {path: '', component: PlayGroupHostHomeComponent},
  { path: 'new', component: PlayGroupHostNewComponent },
  { path: ':id', component: PlayGroupHostDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PlayGroupHost-detail-permissions'
      }
    }
  }
];

export const PLAYGROUPHOST_MODULE_DECLARATIONS = [
    PlayGroupHostHomeComponent,
    PlayGroupHostNewComponent,
    PlayGroupHostDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayGroupHostRoutingModule { }