import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayGroupHomeComponent } from './home/PlayGroup-home.component';
import { PlayGroupNewComponent } from './new/PlayGroup-new.component';
import { PlayGroupDetailComponent } from './detail/PlayGroup-detail.component';

const routes: Routes = [
  {path: '', component: PlayGroupHomeComponent},
  { path: 'new', component: PlayGroupNewComponent },
  { path: ':id', component: PlayGroupDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PlayGroup-detail-permissions'
      }
    }
  },{
    path: ':group_id/Dinosaur', loadChildren: () => import('../Dinosaur/Dinosaur.module').then(m => m.DinosaurModule),
    data: {
        oPermission: {
            permissionId: 'Dinosaur-detail-permissions'
        }
    }
},{
    path: ':play_group_id/DinosaurActivity', loadChildren: () => import('../DinosaurActivity/DinosaurActivity.module').then(m => m.DinosaurActivityModule),
    data: {
        oPermission: {
            permissionId: 'DinosaurActivity-detail-permissions'
        }
    }
},{
    path: ':play_group_id/PlayGroupFacility', loadChildren: () => import('../PlayGroupFacility/PlayGroupFacility.module').then(m => m.PlayGroupFacilityModule),
    data: {
        oPermission: {
            permissionId: 'PlayGroupFacility-detail-permissions'
        }
    }
},{
    path: ':play_group_id/PlayGroupSession', loadChildren: () => import('../PlayGroupSession/PlayGroupSession.module').then(m => m.PlayGroupSessionModule),
    data: {
        oPermission: {
            permissionId: 'PlayGroupSession-detail-permissions'
        }
    }
},{
    path: ':associated_play_group_id/Trainer', loadChildren: () => import('../Trainer/Trainer.module').then(m => m.TrainerModule),
    data: {
        oPermission: {
            permissionId: 'Trainer-detail-permissions'
        }
    }
}
];

export const PLAYGROUP_MODULE_DECLARATIONS = [
    PlayGroupHomeComponent,
    PlayGroupNewComponent,
    PlayGroupDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayGroupRoutingModule { }