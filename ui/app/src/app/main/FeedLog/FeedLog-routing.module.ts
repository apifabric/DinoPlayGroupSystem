import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedLogHomeComponent } from './home/FeedLog-home.component';
import { FeedLogNewComponent } from './new/FeedLog-new.component';
import { FeedLogDetailComponent } from './detail/FeedLog-detail.component';

const routes: Routes = [
  {path: '', component: FeedLogHomeComponent},
  { path: 'new', component: FeedLogNewComponent },
  { path: ':id', component: FeedLogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'FeedLog-detail-permissions'
      }
    }
  }
];

export const FEEDLOG_MODULE_DECLARATIONS = [
    FeedLogHomeComponent,
    FeedLogNewComponent,
    FeedLogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedLogRoutingModule { }