import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayGroupSessionHomeComponent } from './home/PlayGroupSession-home.component';
import { PlayGroupSessionNewComponent } from './new/PlayGroupSession-new.component';
import { PlayGroupSessionDetailComponent } from './detail/PlayGroupSession-detail.component';

const routes: Routes = [
  {path: '', component: PlayGroupSessionHomeComponent},
  { path: 'new', component: PlayGroupSessionNewComponent },
  { path: ':id', component: PlayGroupSessionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PlayGroupSession-detail-permissions'
      }
    }
  },{
    path: ':play_group_session_id/DinosaurAttendance', loadChildren: () => import('../DinosaurAttendance/DinosaurAttendance.module').then(m => m.DinosaurAttendanceModule),
    data: {
        oPermission: {
            permissionId: 'DinosaurAttendance-detail-permissions'
        }
    }
}
];

export const PLAYGROUPSESSION_MODULE_DECLARATIONS = [
    PlayGroupSessionHomeComponent,
    PlayGroupSessionNewComponent,
    PlayGroupSessionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayGroupSessionRoutingModule { }